import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-96 text-white">
      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-medium opacity-90">Loading...</p>
    </div>
  );
}

export default Loading;
