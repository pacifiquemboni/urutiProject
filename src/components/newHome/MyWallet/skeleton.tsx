

const Skeleton = () => {
  return (
    <div className="animate-pulse space-y-6 p-4">
      

      {/* Greeting and CopyTextComponent Skeleton */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-5">
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
          <div className="h-6 w-48 bg-gray-300 rounded"></div>
        </div>
        <div className="h-10 w-40 bg-gray-300 rounded"></div>
      </div>

      <hr />

      {/* Wallet and Tokens Section Skeleton */}
      <div className="flex flex-col lg:flex-row gap-3">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center gap-3 p-4 bg-gray-300 rounded w-full lg:w-1/3"
          >
            <div className="h-12 w-12 bg-gray-400 rounded"></div>
            <div className="flex flex-col space-y-2 w-full">
              <div className="h-4 w-24 bg-gray-400 rounded"></div>
              <div className="h-6 w-20 bg-gray-400 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Game Details Section Skeleton */}
      <div>
        <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left side (Selected Product) */}
          <div className="w-full lg:w-1/2 space-y-3">
            <div className="h-40 w-full bg-gray-300 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-6 w-full bg-gray-300 rounded"></div>
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Right side (Tickets and Payment) */}
          <div className="w-full lg:w-1/2 space-y-3">
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="h-10 w-full bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
