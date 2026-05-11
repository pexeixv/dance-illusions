export function PageSkeleton() {
  return (
    <div className="w-full">
      {/* Hero Skeleton */}
      <div className="mt-32 mb-8 h-96 bg-slate-900 animate-pulse" />

      {/* Content Skeleton */}
      <div className="px-4 py-8 mx-auto space-y-4 max-w-7xl">
        <div className="w-3/4 h-8 rounded bg-slate-900 animate-pulse" />
        <div className="w-full h-4 rounded bg-slate-900 animate-pulse" />
        <div className="w-5/6 h-4 rounded bg-slate-900 animate-pulse" />
        <div className="w-4/5 h-4 rounded bg-slate-900 animate-pulse" />

        {/* Grid Items Skeleton */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-48 rounded bg-slate-900 animate-pulse" />
              <div className="w-3/4 h-4 rounded bg-slate-900 animate-pulse" />
              <div className="w-1/2 h-4 rounded bg-slate-900 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
