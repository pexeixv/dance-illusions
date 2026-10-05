import { BLOG_POSTS_PER_PAGE, hygraphEndpoint } from '@/config'

// ─── Types ─────────────────────────────────────────────────────

export type PostAuthor = {
  name: string
  picture: { url: string } | null
}

export type PostSummary = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  date: string | null
  publishedAt: string | null
  coverImage: { url: string; width: number | null; height: number | null } | null
  author: PostAuthor | null
}

export type PostDetail = PostSummary & {
  content: { markdown: string } | null
  updatedAt: string
}

export type PostsPage = {
  posts: PostSummary[]
  total: number
  totalPages: number
  page: number
}

// ─── Fetch helper ──────────────────────────────────────────────

type GraphQLResponse<T> = { data?: T; errors?: { message: string }[] }

async function hygraphFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
  signal?: AbortSignal
): Promise<T> {
  if (!hygraphEndpoint) {
    throw new Error('VITE_HYGRAPH_ENDPOINT is not set')
  }

  const res = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    signal,
  })

  if (!res.ok) {
    throw new Error(`Hygraph request failed (${res.status})`)
  }

  const json = (await res.json()) as GraphQLResponse<T>
  if (json.errors?.length || !json.data) {
    throw new Error(json.errors?.map((e) => e.message).join('; ') ?? 'Empty Hygraph response')
  }
  return json.data
}

// ─── Queries ───────────────────────────────────────────────────

const POST_SUMMARY_FIELDS = /* GraphQL */ `
  id
  title
  slug
  excerpt
  date
  publishedAt
  coverImage {
    url
    width
    height
  }
  author {
    name
    picture {
      url
    }
  }
`

const POSTS_PAGE_QUERY = /* GraphQL */ `
  query PostsPage($first: Int!, $skip: Int!) {
    posts(first: $first, skip: $skip, orderBy: date_DESC) {
      ${POST_SUMMARY_FIELDS}
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`

const POST_BY_SLUG_QUERY = /* GraphQL */ `
  query PostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      ${POST_SUMMARY_FIELDS}
      updatedAt
      content {
        markdown
      }
    }
  }
`

const ALL_POST_SLUGS_QUERY = /* GraphQL */ `
  query AllPostSlugs($first: Int!, $skip: Int!) {
    posts(first: $first, skip: $skip, orderBy: date_DESC) {
      slug
      updatedAt
    }
  }
`

// ─── Public API ────────────────────────────────────────────────

export async function getPostsPage(page: number, signal?: AbortSignal): Promise<PostsPage> {
  const data = await hygraphFetch<{
    posts: PostSummary[]
    postsConnection: { aggregate: { count: number } }
  }>(
    POSTS_PAGE_QUERY,
    { first: BLOG_POSTS_PER_PAGE, skip: (page - 1) * BLOG_POSTS_PER_PAGE },
    signal
  )

  const total = data.postsConnection.aggregate.count
  return {
    posts: data.posts,
    total,
    totalPages: Math.max(1, Math.ceil(total / BLOG_POSTS_PER_PAGE)),
    page,
  }
}

/** Returns null when no post exists for the slug. */
export async function getPostBySlug(
  slug: string,
  signal?: AbortSignal
): Promise<PostDetail | null> {
  const data = await hygraphFetch<{ post: PostDetail | null }>(POST_BY_SLUG_QUERY, { slug }, signal)
  return data.post
}

/** Handy for a build-time sitemap script (Hygraph caps `first` at 100). */
export async function getAllPostSlugs(): Promise<{ slug: string; updatedAt: string }[]> {
  const all: { slug: string; updatedAt: string }[] = []
  for (let skip = 0; ; skip += 100) {
    const data = await hygraphFetch<{ posts: { slug: string; updatedAt: string }[] }>(
      ALL_POST_SLUGS_QUERY,
      { first: 100, skip }
    )
    all.push(...data.posts)
    if (data.posts.length < 100) break
  }
  return all
}

// ─── Helpers ───────────────────────────────────────────────────

/** Post `date` is a Hygraph Date (YYYY-MM-DD); fall back to publishedAt (ISO datetime). */
export function formatPostDate(post: Pick<PostSummary, 'date' | 'publishedAt'>): string | null {
  const raw = post.date ?? post.publishedAt
  if (!raw) return null
  return new Date(raw.slice(0, 10) + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Machine-readable ISO date for <time dateTime> and JSON-LD. */
export function postIsoDate(post: Pick<PostSummary, 'date' | 'publishedAt'>): string | null {
  return post.date ?? post.publishedAt ?? null
}
