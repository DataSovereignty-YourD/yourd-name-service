import { useState } from 'react';

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[700px] h-[240px] bg-white rounded-lg shadow-lg flex flex-col ">
        <div className="flex-none h-1/3 bg-gradient-to-r from-sky-300 to-violet-300 rounded-t-2xl">

        </div>

        <div className="flex-grow bg-white rounded-b-2xl">
            EXAMPLE.yourD
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-2xl flex w-[700px] h-20 mb-[400px] mt-5 border border-purple-500'>
        something
      </div>
    </div>
  );
}
