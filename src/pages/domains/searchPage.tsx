import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex w-full h-[calc(100vh-4rem)]  justify-center ">
      <div className="flex flex-col w-full pt-32  items-center">
        <div className="font-pretendard font-bold text-3xl sm:text-4xl text-center">
          <div className="text-[#fccc00]">One Name,</div>
          <div>Infinite Possibilities</div>
        </div>
        <div className="flex justify-center w-full ">
          <div className="flex p-4 w-full mx-5 sm:mx-20 sm:max-w-3xl bg-gray-100 mt-12 sm:mt-20 duration-200   gap-4 rounded-full shadow-inner ">
            <BiSearchAlt2 size={22} />
            <input
              className="w-full h-full  text-sm sm:text-lg bg-gray-100  focus:outline-none "
              placeholder="Search to Create Your Identity"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
