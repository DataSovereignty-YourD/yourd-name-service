import React, { SetStateAction, useState } from "react";
import klaytn from "../../assets/img/klaytn_logo.png";
import tezos from "../../assets/img/tezos_logo.png";
import eth from "../../assets/img/eth_logo.png";
import { TestData } from "../../test/testData";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function DomainsList() {
  const [isDropdown, setDropdown] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState("Select Chain"); // 초기값 설정

  const toggleDropdown = () => {
    setDropdown(!isDropdown);
  };

  const handleLogoSelect = (selectedList: string) => {
    // 문자열로 선택된 로고의 이름을 업데이트
    setSelectedLogo(selectedList);
    setDropdown(false);
  };

  let logos = [
    {
      name: "klaytn",
      icon: klaytn,
    },
    {
      name: "tezos",
      icon: tezos,
    },
    {
      name: "ethereum",
      icon: eth,
    },
  ];

  return (
    <div className=" items-center justify-center mx-80">
      <div className=" justify-between flex items-center mx-32 my-12">
        <div className=" flex text-[28px] gap-8 items-center ">
          <button className=" px-4 border-b-2 border-blue-600">All</button>
          <button className=" text-lg px-4">DeFi</button>
          <button className=" text-lg px-4">NFT</button>
          <button className=" text-lg px-4">Games</button>
          <button className=" text-lg px-4">Exchanges</button>
          <button className=" text-lg px-4">Social</button>
          <button className=" text-lg px-4">Other</button>
        </div>
        <div>
          <button
            className="  text-black  hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={toggleDropdown}
          >
            <img src={selectedLogo} alt="" />
            {selectedLogo}
            <MdOutlineKeyboardArrowDown className="  ml-6" size={20} />
          </button>
        </div>

        {isDropdown && (
          <div
            className="  bg-white absolute text-base list-none z-50 top-40 right-28 justify-center flex items-center divide-gray-100 rounded shadow  min-w-max w-fit h-fit pb-4  p-2  bg-base-100"
            id="dropdown"
          >
            <ul className="  py-1">
              {logos.map((logo, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="  text-lg hover:bg-gray-100 text-gray-700  px-4 py-2 flex"
                    onClick={() => handleLogoSelect(logo.name)}
                  >
                    <img src={logo.icon} alt="" className="  w-5 h-5 mr-2" />
                    {logo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" flex items-center justify-center p-4 ">
        <div className=" gap-12 border-b-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20">
          {TestData.map((test, index) => (
            <div
              key={index}
              className=" flex justify-center border border-gray-500  shadow-lg w-full rounded-3xl"
            >
              <div className=" flex flex-col">
                <div className=" flex gap-2">
                  <img
                    src={test.logo}
                    className=" object-contain rounded-md w-[100px] my-6"
                    alt=""
                  />

                  <div className=" flex flex-col my-auto text-lg">
                    <div className=" flex text-lg font-bold mb-2">
                      {test.name}
                    </div>

                    <div className="  flex text-md text-gray-500 gap-1 text-md">
                      <div className="  border border-gray-400 rounded-2xl py-1 px-1">
                        {test.category[0]}
                      </div>
                      <div className="  border border-gray-400 rounded-2xl py-1 px-1">
                        {test.category[1]}
                      </div>
                      <div className="  border border-gray-400 rounded-2xl py-1 px-1">
                        {test.category[2]}
                      </div>
                      <div className="  border border-gray-400 rounded-2xl py-1 px-1">
                        {test.category[3]}
                      </div>
                    </div>
                    <div className="  text-lg text-gray-500  mt-2 w-full truncate">
                      {test.description}
                    </div>
                  </div>
                </div>
                <div className="  flex items-center justify-between  gap-4 text-lg mb-4">
                  <div className="  border border-gray-300 items-center justify-center flex rounded-3xl font-bold py-5 w-full">
                    view details
                  </div>
                  <div className="  border border-gray-300 items-center justify-center flex rounded-3xl text-blue-600 font-bold py-5 w-full">
                    open
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
