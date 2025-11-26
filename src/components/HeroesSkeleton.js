export function HeroesSkeleton() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex px-6 text-gray-500 w-fit mx-auto md:m-0 animate-pulse">
        <div className="bg-gray-300 h-5 w-32 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
        <div className="relative w-full h-[500px] md:h-full flex items-center justify-center">
          <div className="absolute left-4 z-10 bg-gray-300 p-2 rounded-full w-10 h-10 animate-pulse"></div>

          <div className="relative w-full h-full bg-gray-300 rounded-lg animate-pulse"></div>

          <div className="absolute right-4 z-10 bg-gray-300 p-2 rounded-full w-10 h-10 animate-pulse"></div>
        </div>

        <div className="flex flex-col gap-3 justify-center animate-pulse">
          <div className="bg-gray-300 h-8 w-32 rounded-full"></div>

          <div className="flex flex-col gap-2">
            <div className="bg-gray-300 h-10 w-3/4 rounded"></div>

            <div className="bg-gray-300 h-7 w-24 rounded"></div>

            <div className="bg-gray-300 h-5 w-40 rounded"></div>

            <div className="space-y-2 mt-2">
              <div className="bg-gray-300 h-4 w-full rounded"></div>
              <div className="bg-gray-300 h-4 w-full rounded"></div>
              <div className="bg-gray-300 h-4 w-2/3 rounded"></div>
            </div>

            <div className="space-y-2 mt-4">
              <div className="bg-gray-300 h-4 w-36 rounded"></div>
              <div className="bg-gray-300 h-4 w-48 rounded"></div>
              <div className="bg-gray-300 h-4 w-44 rounded"></div>
              <div className="bg-gray-300 h-4 w-40 rounded"></div>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-4">
            <div className="bg-gray-300 h-10 w-24 rounded"></div>
            <div className="bg-gray-300 rounded-full w-7 h-7"></div>
            <div className="bg-gray-300 rounded-full w-7 h-7"></div>
            <div className="bg-gray-300 rounded-full w-7 h-7"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
