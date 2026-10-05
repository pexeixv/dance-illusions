import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Calendar } from 'lucide-react'
import Seo, { SITE_URL } from '@/components/Seo'
import { Pagination } from '@/components/Pagination'
import { BLOG_POSTS_PER_PAGE } from '@/config'
import { formatPostDate, getPostsPage, postIsoDate, type PostsPage } from '@/lib/hygraph'
import { breadcrumbs } from '@/utils/breadcrumb'
import NotFound from './NotFound'

const blogHref = (page: number) => (page <= 1 ? '/blog' : `/blog/page/${page}`)

function PostGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-hidden="true">
      {Array.from({ length: BLOG_POSTS_PER_PAGE }).map((_, i) => (
        <div key={i} className="glass-card overflow-hidden">
          <div className="aspect-[16/10] bg-slate-900 animate-pulse" />
          <div className="p-6 space-y-3">
            <div className="h-3 w-1/3 rounded bg-slate-900 animate-pulse" />
            <div className="h-5 w-3/4 rounded bg-slate-900 animate-pulse" />
            <div className="h-4 w-full rounded bg-slate-900 animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-slate-900 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function Blog() {
  const { page: pageParam } = useParams<{ page?: string }>()

  // /blog → page 1. /blog/page/:page must be a plain positive integer.
  const isValidParam = pageParam === undefined || /^[1-9]\d*$/.test(pageParam)
  const page = pageParam === undefined ? 1 : Number(pageParam)

  const [result, setResult] = useState<PostsPage | null>(null)
  const [error, setError] = useState(false)
  // Ignore results left over from a previous page while the new one loads
  const data = result && result.page === page ? result : null

  useEffect(() => {
    if (!isValidParam || (page === 1 && pageParam !== undefined)) return

    const controller = new AbortController()
    setError(false)

    getPostsPage(page, controller.signal)
      .then(setResult)
      .catch((err) => {
        if (err?.name === 'AbortError') return
        console.error(err)
        setError(true)
      })

    return () => controller.abort()
  }, [page, pageParam, isValidParam])

  if (!isValidParam) return <NotFound />
  // Canonical URL for the first page is /blog
  if (pageParam !== undefined && page === 1) return <Navigate to="/blog" replace />
  // Page number beyond the last page
  if (data && page > data.totalPages) return <NotFound />

  const canonical = SITE_URL + blogHref(page)
  const title = page > 1 ? `Dance Blog - Page ${page}` : 'Dance Blog'
  const description =
    'Dance tips, event updates and stories from Dance Illusions Goa. Read about ballroom, Latin and social dancing from our instructors.'

  return (
    <div className="pt-32 pb-24">
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        keywords="dance blog goa, ballroom dance tips, latin dance blog, dance illusions blog"
        breadcrumbs={[
          breadcrumbs.home,
          breadcrumbs.blog,
          ...(page > 1 ? [{ name: `Page ${page}`, url: canonical }] : []),
        ]}
      />

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Dance <span className="text-gradient-primary">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Updates from the Dance Illusions studio floor.
          </motion.p>
        </div>

        {error ? (
          <div className="glass-card max-w-xl mx-auto p-10 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Couldn't load posts</h2>
            <p className="text-slate-400">
              Something went wrong while fetching the blog. Please try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95"
            >
              Retry
            </button>
          </div>
        ) : !data ? (
          <PostGridSkeleton />
        ) : data.posts.length === 0 ? (
          <p className="text-center text-slate-400 text-lg">No posts yet. Check back soon!</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.posts.map((post, idx) => {
                const date = formatPostDate(post)
                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group relative glass-card overflow-hidden hover:shadow-2xl"
                  >
                    <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
                      <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                        {post.coverImage && (
                          <img
                            src={post.coverImage.cardLg}
                            srcSet={`${post.coverImage.cardSm} 480w, ${post.coverImage.cardLg} 800w`}
                            sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            alt={post.title}
                            width={800}
                            height={500}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading={idx < 3 ? 'eager' : 'lazy'}
                            fetchPriority={idx === 0 ? 'high' : 'auto'}
                            decoding="async"
                          />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-6 space-y-3">
                        {date && (
                          <time
                            dateTime={postIsoDate(post) ?? undefined}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest"
                          >
                            <Calendar size={14} className="text-purple-400" />
                            {date}
                          </time>
                        )}
                        <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-slate-400 text-sm line-clamp-3">{post.excerpt}</p>
                        )}
                        <div className="mt-auto pt-2 inline-flex items-center gap-2 text-white font-bold text-sm group-hover:text-purple-400 transition-colors">
                          Read More
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                )
              })}
            </div>

            <Pagination
              currentPage={page}
              totalPages={data.totalPages}
              getHref={blogHref}
              className="mt-16"
            />
          </>
        )}
      </div>
    </div>
  )
}
