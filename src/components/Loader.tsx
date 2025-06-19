
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* Pulsing emerald circle loader */}
      <div className="w-10 h-10 bg-emerald-500 rounded-full animate-pulse mb-6"></div>
      
      {/* Skeleton bars with shimmer effect */}
      <div className="space-y-3 w-80 max-w-sm">
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_infinite]"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-2/3 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_infinite] delay-75"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-5/6 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_infinite] delay-150"></div>
      </div>
    </div>
  );
};

export default Loader;
