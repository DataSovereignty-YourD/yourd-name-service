import React, { SetStateAction, useState, useEffect } from "react";
import klaytn from "../../assets/img/klaytn_logo.png";
import tezos from "../../assets/img/tezos_logo.png";
import eth from "../../assets/img/eth_logo.png";
import { TestData } from "../../test/testData";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function DomainsList() {
  const [isDropdown, setDropdown] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState({
    name: "Klaytn",
    icon: klaytn,
  });
  const [isMenuDropdown, setMenuDropdown] = useState(false);
  const [isSmScreen, setIsSmScreen] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!isDropdown);
  };
  const toggleMenuDropdown = () => {
    setMenuDropdown(!isMenuDropdown);
  };

  const handleLogoSelect = (selectedList: any) => {
    const selectedLogoObject = logos.find((logo) => logo.name === selectedList);
    if (selectedLogoObject) {
      setSelectedLogo(selectedLogoObject);
    }
    setDropdown(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttons = [
    { label: "All", icon: null },
    { label: "DeFi", icon: null },
    { label: "NFT", icon: null },
    { label: "Games", icon: null },
    { label: "Exchanges", icon: null },
    { label: "Social", icon: null },
    { label: "Other", icon: null },
  ];

  let logos = [
    {
      name: "Klaytn",
      icon: klaytn,
    },
    {
      name: "Tezos",
      icon: tezos,
    },
    {
      name: "Ethereum",
      icon: eth,
    },
  ];

  return (
    <div className="   items-center justify-center mx-4 mb-80 lg:mx-20 sm:min-w-max">
      <div className="   justify-between flex items-center my-6 mx-2 sm:my-12">
        <div className="   text-[28px] gap-2 items-center ">
          <div className=" flex">
            <div className=" flex">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-4 ${
                    index === 0 ? "border-b-2 border-blue-600 sm:" : ""
                  } text-lg ${index !== -1 ? "hidden md:block" : ""}`}
                >
                  {button.label}
                </button>
              ))}
            </div>
            <button
              className={`text-black gap-1  hover:bg-blue-100  py-2  focus:ring-blue-300 font-medium rounded-lg text-lg  text-center inline-flex items-center ${
                isSmScreen ? "" : "md:hidden"
              }`}
              type="button"
              onClick={toggleMenuDropdown}
            >
              <div className=" items-center justify-center  flex md:hidden">
                <span>{buttons[0].label}</span>
                <MdOutlineKeyboardArrowDown
                  className=" ml-2 itmes-center justify-center"
                  size={20}
                />
              </div>
            </button>
          </div>
          {isMenuDropdown && (
            <div
              className=" bg-white absolute text-base list-none justify-center flex items-center divide-gray-100 rounded shadow  min-w-max w-fit h-fit  bg-base-100"
              id="dropdown"
            >
              <ul className="py-1">
                {buttons.slice(1).map((button, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-lg hover:bg-gray-100 text-gray-700 px-4 py-2 flex"
                    >
                      {button.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <button
            className="   text-black gap-2  hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg  py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={toggleDropdown}
          >
            <img src={selectedLogo.icon} className=" w-5 " alt="" />
            {selectedLogo.name}
            <MdOutlineKeyboardArrowDown className="ml-1 sm:ml-4" size={20} />
          </button>
          {isDropdown && (
            <div
              className="   bg-white absolute text-base list-none z-50 justify-center flex items-center divide-gray-100 rounded shadow  min-w-max w-fit h-fit  bg-base-100"
              id="dropdown"
            >
              <ul className="  ">
                {logos.map((logo, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className=" items-center    text-lg hover:bg-gray-100 text-gray-700  px-4 py-2 flex"
                      onClick={() => handleLogoSelect(logo.name)}
                    >
                      <img src={logo.icon} alt="" className="   w-5 h-5 mr-2" />
                      {logo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="   flex items-center justify-center  ">
        <div className="   gap-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full sm:min-w-max">
          {TestData.map((test, index) => (
            <div
              key={index}
              className="   flex justify-center border border-gray-200  shadow-lg w-full rounded-3xl"
            >
              <div className="   flex flex-col ">
                <div className="   flex gap-2 ">
                  <img
                    src={test.logo}
                    className="  object-contain  rounded-md w-[100px] my-3"
                    alt=""
                  />

                  <div className="   flex flex-col my-auto text-md ">
                    <div className="   flex text-lg font-semibold mb-1 ">
                      {test.name}
                    </div>

                    <div className="    flex text-xs text-gray-800 gap-1 text-md">
                      <div className="    border border-gray-600 rounded-md py-1 px-1">
                        {test.category[0]}
                      </div>
                      <div className="    border border-gray-600 rounded-md py-1 px-1">
                        {test.category[1]}
                      </div>
                      <div className="    border border-gray-600 rounded-md py-1 px-1">
                        {test.category[2]}
                      </div>
                      <div className="    border border-gray-600 rounded-md py-1 px-1">
                        {test.category[3]}
                      </div>
                    </div>
                    <div className="    text-sm text-gray-500  mt-1 w-full truncate ">
                      {test.description}
                    </div>
                  </div>
                </div>
                <div className="    flex items-center justify-between mx-4 gap-4 text-md mb-4">
                  <div className="    border border-gray-300 items-center justify-center flex rounded-3xl font-bold py-1 w-full">
                    view details
                  </div>
                  <div className="    border border-gray-300 items-center justify-center flex rounded-3xl text-blue-600 font-bold py-1 w-full">
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
