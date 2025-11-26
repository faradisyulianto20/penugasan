import React from 'react';

const BookScanSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>

      <div className="flex w-full justify-center gap-3 my-6">
        <div className="h-10 bg-gray-200 rounded w-64 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
      </div>

      <div className="my-6">
        <div className="h-7 bg-gray-200 rounded w-40 mb-4 animate-pulse"></div>
        
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="shrink-0 w-48">
              {/* Book Card Skeleton */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="w-48 h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-3 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookScanSkeleton;