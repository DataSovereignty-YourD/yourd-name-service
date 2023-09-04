import { useState } from 'react';

export default function Records() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[700px] h-[240px] bg-white rounded-lg shadow-lg mb-[400px] flex flex-col justify-center p-6 border border-red-600">
      <div className="text-left mb-6">Text 0 Records</div>
        <div className="text-left mb-6">Address 0 Records</div>
        <div className="text-left mb-6">No Content Hash</div>
        <div className="text-left">No ABI</div>
      </div>
    </div>
  );
}
