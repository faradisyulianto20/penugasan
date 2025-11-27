export default function DetailBookSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse mb-6" />

      <div className="flex w-full justify-center gap-3 my-6">
        <div className="h-10 w-64 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-10 w-24 bg-gray-200 rounded-md animate-pulse" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="w-full md:w-1/3">
          <div className="w-full h-96 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        <div className="border-2 border-gray-300 w-full px-6 py-4 rounded-2xl">
          <div className="h-7 w-32 bg-gray-200 rounded-md animate-pulse mb-4" />
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-gray-300 rounded animate-pulse" />
              <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-gray-300 rounded animate-pulse" />
              <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-gray-300 rounded animate-pulse" />
              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-gray-300 rounded animate-pulse" />
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
