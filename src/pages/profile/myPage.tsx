import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ListDomain from "./listDomain";
import Collection from "./collection";

import { GoPerson } from "react-icons/go";
import { TfiBarChart } from "react-icons/tfi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineElectricalServices, MdOutlineHistory } from "react-icons/md";
import { HiOutlineWallet } from "react-icons/hi2";

export default function MyPage() {
  const [activeMenu, setActiveMenu] = useState("collection");
  const location = useLocation();
  const pathName = location.pathname;
  const handleMenuClick = (key: string) => {
    setActiveMenu(key);
  };
  const menuItems = [
    {
      key: "listdomain",
      label: "Listdomain",
      icon: <TfiBarChart size={20} />,
    },
    {
      key: "collection",
      label: "Collection",
      icon: <TfiBarChart size={20} />,
    },
    {
      key: "Bookmarked",
      label: "Bookmarked",
      icon: <BiMoneyWithdraw size={20} />,
    },
    {
      key: "offers",
      label: "Offers",
      icon: <MdOutlineElectricalServices size={20} />,
    },
    {
      key: "listings",
      label: "Listings",
      icon: <MdOutlineHistory size={20} />,
    },
    {
      key: "activis",
      label: "Activity",
      icon: <HiOutlineWallet size={20} />,
    },
  ];

  return (
    <div className="">
      <div className="mx-80 flex justify-between gap-10 mt-20  items-center  border border-gray-200 p-4 rounded-md">
        <div className="flex flex-row ">
          <GoPerson className="mx-3 itmes-center justify-center text-black text-[32px]" />
          0x8e2b834073baa7e89c22ff28353c0d7e308ba523
        </div>

        <div className="text-gray-600">Finder에서 보기</div>
      </div>
      <div>
        <div className="mx-80 flex gap-4 mt-10  items-center  p-4 rounded-md">
          <div>
            <nav className=" bg-white text-black p-4">
              <ul className=" flex justify-between mx-auto space-x-4 text-lg">
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => handleMenuClick(item.key)}
                      className={`${
                        activeMenu === item.key
                          ? "border-b-2 border-blue-500"
                          : "border-transparent"
                      } focus:outline-none hover:bg-gray-100 rounded-sm`}
                    >
                      <div className=" flex  items-center ">
                        <div className="w-8 h-8 items-center flex justify-center">
                          {item.icon}
                        </div>
                        <div className="">{item.label}</div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-full h-fit  value">
              {activeMenu === "listdomain" && <ListDomain />}
              {activeMenu === "collection" && <Collection />}
              {activeMenu === "plan" && <div></div>}
              {activeMenu === "add-ons" && <div>소개 페이지 컨텐츠</div>}
              {activeMenu === "history" && <div>소개 페이지 컨텐츠</div>}
              {activeMenu === "payment" && <div>소개 페이지 컨텐츠</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
