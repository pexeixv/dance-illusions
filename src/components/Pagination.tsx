import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'

type PaginationProps = {
  currentPage: number
  totalPages: number
  /** Build the URL for a given page number, e.g. (p) => (p === 1 ? '/blog' : `/blog/page/${p}`) */
  getHref: (page: number) => string
  className?: string
}

type PageItem = number | 'ellipsis-start' | 'ellipsis-end'

/** 1 … 4 5 6 … 12 style range: always show first, last, and a window around the current page. */
function getPageItems(current: number, total: number, siblings = 1): PageItem[] {
  const maxVisible = siblings * 2 + 5 // first + last + current±siblings + 2 ellipses
  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const left = Math.max(current - siblings, 2)
  const right = Math.min(current + siblings, total - 1)
  const items: PageItem[] = [1]

  if (left > 2) items.push('ellipsis-start')
  for (let p = left; p <= right; p++) items.push(p)
  if (right < total - 1) items.push('ellipsis-end')

  items.push(total)
  return items
}

const baseItem =
  'inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-xl border text-sm font-medium transition-all'

export function Pagination({ currentPage, totalPages, getHref, className }: PaginationProps) {
  if (totalPages <= 1) return null

  const hasPrev = currentPage > 1
  const hasNext = currentPage < totalPages

  return (
    <nav aria-label="Pagination" className={clsx('flex justify-center', className)}>
      <ul className="flex flex-wrap items-center justify-center gap-2">
        <li>
          {hasPrev ? (
            <Link
              to={getHref(currentPage - 1)}
              rel="prev"
              aria-label="Go to previous page"
              className={clsx(
                baseItem,
                'gap-1 border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              )}
            >
              <ChevronLeft size={16} />
              <span className="max-sm:hidden">Previous</span>
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className={clsx(baseItem, 'gap-1 border-white/5 text-slate-600 cursor-not-allowed')}
            >
              <ChevronLeft size={16} />
              <span className="max-sm:hidden">Previous</span>
            </span>
          )}
        </li>

        {getPageItems(currentPage, totalPages).map((item) => {
          if (typeof item !== 'number') {
            return (
              <li key={item} aria-hidden="true" className="px-1 text-slate-500 select-none">
                …
              </li>
            )
          }

          const isCurrent = item === currentPage
          return (
            <li key={item}>
              <Link
                to={getHref(item)}
                aria-label={`Go to page ${item}`}
                aria-current={isCurrent ? 'page' : undefined}
                className={clsx(
                  baseItem,
                  isCurrent
                    ? 'border-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/20'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                )}
              >
                {item}
              </Link>
            </li>
          )
        })}

        <li>
          {hasNext ? (
            <Link
              to={getHref(currentPage + 1)}
              rel="next"
              aria-label="Go to next page"
              className={clsx(
                baseItem,
                'gap-1 border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              )}
            >
              <span className="max-sm:hidden">Next</span>
              <ChevronRight size={16} />
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className={clsx(baseItem, 'gap-1 border-white/5 text-slate-600 cursor-not-allowed')}
            >
              <span className="max-sm:hidden">Next</span>
              <ChevronRight size={16} />
            </span>
          )}
        </li>
      </ul>
    </nav>
  )
}
