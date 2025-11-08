// app/blog/loading.js
'use client';

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Skeleton */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Category Bar Skeleton */}
        <div className="flex gap-3 mb-8 overflow-x-auto py-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-12 w-32 bg-gray-200 rounded-xl animate-pulse"
            />
          ))}
        </div>

        {/* Featured Post Skeleton */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="h-[450px] bg-gray-200 rounded-2xl animate-pulse" />
            <div className="space-y-4">
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Posts Grid Skeleton */}
          <div className="lg:col-span-8 space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-6 bg-white p-4 rounded-xl shadow-md">
                <div className="w-72 h-48 bg-gray-200 rounded-xl animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-pulse {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(
            90deg,
            #f0f0f0 0%,
            #f8f8f8 50%,
            #f0f0f0 100%
          );
          background-size: 1000px 100%;
        }
      `}</style>
    </div>
  );
}
