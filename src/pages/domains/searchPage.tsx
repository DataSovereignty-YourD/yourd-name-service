import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="flex w-full mb-56 justify-center ">
      <div className="flex flex-col w-full pt-32  items-center">
        <div className="font-pretendard font-bold text-3xl sm:text-4xl text-center">
          <div className="text-[#fccc00]">One Name,</div>
          <div>Infinite Possibilities</div>
        </div>
        <div className="flex justify-center w-full ">
          <div className="flex p-4 w-1/3 mx-5 sm:mx-20 sm:max-w-3xl bg-gray-100 mt-12 sm:mt-20 duration-200 gap-4 rounded-full shadow-inner 
          border border-transparent hover:border-[#fccc00] focus-within:border-[#fccc00]">
            <BiSearchAlt2 size={22}/>
            <input
              className="w-full h-full  text-sm sm:text-lg bg-gray-100 font-bold  focus:outline-none "
              placeholder="Search for a name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="text-gray-500 hover:text-gray-800 transition duration-150"
              onClick={() => setSearchValue('')}
            >
              <RxCross2 size={24} className='mr-3'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
