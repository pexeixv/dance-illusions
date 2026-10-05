import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import Markdown, { type Components } from 'react-markdown'
import Seo, { SITE_URL } from '@/components/Seo'
import {
  formatPostDate,
  getPostBySlug,
  optimizeAssetUrl,
  postIsoDate,
  type PostDetail,
} from '@/lib/hygraph'
import { forBlogPost } from '@/utils/breadcrumb'
import NotFound from './NotFound'

// No @tailwindcss/typography in the project, so style markdown elements directly.
const markdownComponents: Components = {
  h1: ({ children }) => <h2 className="mt-12 mb-4 text-3xl font-bold text-white">{children}</h2>,
  h2: ({ children }) => <h2 className="mt-12 mb-4 text-3xl font-bold text-white">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-10 mb-3 text-2xl font-bold text-white">{children}</h3>,
  h4: ({ children }) => <h4 className="mt-8 mb-2 text-xl font-bold text-white">{children}</h4>,
  p: ({ children }) => <p className="my-5 text-lg leading-relaxed text-slate-300">{children}</p>,
  a: ({ href, children }) => {
    const isExternal = !!href && /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className="text-purple-400 underline underline-offset-4 hover:text-fuchsia-400 transition-colors"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  },
  ul: ({ children }) => (
    <ul className="my-5 ml-6 list-disc space-y-2 text-lg text-slate-300 marker:text-purple-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 ml-6 list-decimal space-y-2 text-lg text-slate-300 marker:text-purple-400">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-purple-500 pl-6 italic text-slate-300">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-white/10" />,
  img: ({ src, alt }) => {
    if (!src) return null
    const small = optimizeAssetUrl(src, 800)
    const large = optimizeAssetUrl(src, 1600)
    const optimized = small !== src
    return (
      <img
        src={small}
        srcSet={optimized ? `${small} 800w, ${large} 1600w` : undefined}
        sizes={optimized ? '(min-width: 768px) 768px, 100vw' : undefined}
        alt={alt ?? ''}
        loading="lazy"
        decoding="async"
        // If a transformed URL ever fails, fall back to the original upload
        onError={(e) => {
          const el = e.currentTarget
          if (el.dataset.fallback) return
          el.dataset.fallback = '1'
          el.removeAttribute('srcset')
          el.src = src
        }}
        className="my-8 w-full rounded-2xl border border-white/10"
      />
    )
  },
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900 p-5 text-sm">
      {children}
    </pre>
  ),
  code: ({ children, className }) => (
    <code className={className ?? 'rounded bg-white/10 px-1.5 py-0.5 text-sm text-purple-300'}>
      {children}
    </code>
  ),
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-white/10 bg-white/5 px-4 py-3 font-semibold text-white">
      {children}
    </th>
  ),
  td: ({ children }) => <td className="border-b border-white/5 px-4 py-3">{children}</td>,
}

function PostSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6" aria-hidden="true">
      <div className="h-12 w-3/4 rounded bg-slate-900 animate-pulse" />
      <div className="h-4 w-1/3 rounded bg-slate-900 animate-pulse" />
      <div className="aspect-video rounded-3xl bg-slate-900 animate-pulse" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-4 w-full rounded bg-slate-900 animate-pulse" />
      ))}
    </div>
  )
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [result, setResult] = useState<{ slug: string; post: PostDetail | null } | null>(null)
  const [error, setError] = useState(false)
  // Ignore a result that belongs to a previous slug
  const loaded = result && result.slug === slug ? result : null

  useEffect(() => {
    if (!slug) return
    const controller = new AbortController()
    setError(false)

    getPostBySlug(slug, controller.signal)
      .then((post) => setResult({ slug, post }))
      .catch((err) => {
        if (err?.name === 'AbortError') return
        console.error(err)
        setError(true)
      })

    return () => controller.abort()
  }, [slug])

  if (loaded && !loaded.post) return <NotFound />

  const post = loaded?.post ?? null
  const date = post ? formatPostDate(post) : null
  const url = `${SITE_URL}/blog/${slug}`

  return (
    <div className="pt-32 pb-24">
      {post && (
        <Seo
          title={post.title}
          description={post.excerpt ?? `${post.title} - read more on the Dance Illusions Goa blog.`}
          canonical={url}
          ogType="article"
          ogImage={post.coverImage?.og}
          breadcrumbs={forBlogPost(post.title, post.slug)}
          schema={{
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt ?? undefined,
            image: post.coverImage?.og,
            datePublished: postIsoDate(post) ?? undefined,
            dateModified: post.updatedAt,
            mainEntityOfPage: url,
            author: post.author
              ? { '@type': 'Person', name: post.author.name }
              : { '@type': 'Organization', name: 'Dance Illusions Goa' },
            publisher: { '@type': 'Organization', name: 'Dance Illusions Goa', url: SITE_URL },
          }}
        />
      )}

      <div className="container max-w-7xl mx-auto px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {error ? (
          <div className="glass-card max-w-xl mx-auto p-10 text-center space-y-4">
            <h1 className="text-2xl font-bold text-white">Couldn't load this post</h1>
            <p className="text-slate-400">Something went wrong. Please try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95"
            >
              Retry
            </button>
          </div>
        ) : !post ? (
          <PostSkeleton />
        ) : (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <header className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                {date && (
                  <time
                    dateTime={postIsoDate(post) ?? undefined}
                    className="inline-flex items-center gap-2"
                  >
                    <Calendar size={16} className="text-purple-400" />
                    {date}
                  </time>
                )}
                {post.author && (
                  <span className="inline-flex items-center gap-2">
                    {post.author.picture ? (
                      <img
                        src={post.author.picture.avatar}
                        alt=""
                        width={48}
                        height={48}
                        className="size-6 rounded-full object-cover"
                        decoding="async"
                      />
                    ) : (
                      <User size={16} className="text-purple-400" />
                    )}
                    {post.author.name}
                  </span>
                )}
              </div>
            </header>

            {post.coverImage && (
              <img
                src={post.coverImage.coverLg}
                srcSet={`${post.coverImage.coverSm} 768w, ${post.coverImage.coverLg} 1536w`}
                sizes="(min-width: 768px) 768px, 100vw"
                alt={post.title}
                width={post.coverImage.width ?? undefined}
                height={post.coverImage.height ?? undefined}
                className="mt-10 w-full rounded-3xl border border-white/10 shadow-2xl"
                fetchPriority="high"
                decoding="async"
              />
            )}

            <div className="mt-10">
              {post.content?.markdown ? (
                <Markdown components={markdownComponents}>{post.content.markdown}</Markdown>
              ) : (
                post.excerpt && <p className="text-lg text-slate-300">{post.excerpt}</p>
              )}
            </div>

            <div className="mt-16 glass-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white font-bold text-lg">Ready to try it yourself?</p>
                <p className="text-slate-400 text-sm">Join a class near you in Goa.</p>
              </div>
              <Link
                to="/schedule"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-purple-500/20 hover:brightness-110 transition-all active:scale-95"
              >
                View Schedule
              </Link>
            </div>
          </motion.article>
        )}
      </div>
    </div>
  )
}
