import { GoPerson } from "react-icons/go";
import { AiOutlineCheckCircle, AiOutlineSearch } from "react-icons/ai";
import { PiSortAscending, PiSortDescending } from "react-icons/pi";

export default function ListDomain() {
  return (
    <div className=" items-center justify-center ">
      <div>
        <div className="mx-80 flex gap-4 mt-10  items-center  p-4 rounded-md">
          <div className="font-bold text-lg">대표 도메인</div>
          <div className="font-normal text-sm text-gray-400">
            대표 도메인으로 설정하면 주소를 대신하여 해당 도메인이 표시되게
            됩니다.
          </div>
        </div>
        <div className="mx-80 flex flex-col  border bg-white  border-gray-200 p-12 rounded-md">
          <div className="mb-5 text-gray-500 text-lg">
            대표 도메인을 설정해주세요
          </div>
          <button className=" flex border border-red-400 w-20 items-center justify-center bg-red-500 rounded-md text-white">
            설정
          </button>
        </div>
      </div>

      <div className="mx-80 flex flex-col bg-white  p-4 rounded-md mt-10">
        {/* <div className="font-bold text-lg">내 도메인</div>
        <div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span>페이지 당 항목 수</span>
              <span>- 10 +</span>
            </div>
            <div className="flex justify-between gap-28">
              <div className="flex gap-8">
                <span>최근 활동 순</span>
                <span>그룹 선택/해제</span>
              </div>
              <div className="flex gap-3">
                <span>갱신</span>
                <span>수정</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center mt-10 text-gray-600">
          도메인 리스트를 불러오지 못했습니다.
        </div> */}
        <div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <AiOutlineCheckCircle size={24} />
                <span className="border border-gray-300 p-1 rounded-md bg-red-200">
                  Name
                </span>
                <button className="border border-gray-400 rounded-md">
                  <PiSortAscending size={24} />
                </button>
                <button className="border border-gray-400 rounded-md">
                  <PiSortDescending size={24} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 border border-gray-500 rounded-md pl-2 pr-7">
                <AiOutlineSearch className="justify-start flex" />
                Search
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-2 border-gray-500 border-b-2 p-20 items-center justify-center flex">
          No names found for this address
        </div>
        <div className="border border-gray-300  w-fit justify-end items-center flex ">
          10 per page
        </div>
      </div>
    </div>
  );
}
