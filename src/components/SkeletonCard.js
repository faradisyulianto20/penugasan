export default function SkeletonCard() {
  return (
    <div className="shrink-0 w-[200px] animate-pulse">
      <div className="bg-gray-300 h-[260px] rounded-lg mb-3"></div>
      <div className="bg-gray-300 h-4 rounded w-3/4 mb-2"></div>
      <div className="bg-gray-300 h-3 rounded w-1/2 mb-2"></div>
      <div className="bg-gray-300 h-4 rounded w-1/3"></div>
    </div>
  );
}
