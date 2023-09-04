import { useState } from 'react';
import Logo from '../../assets/img/yourd-logo.png';
import klaytnLogo from '../../assets/img/klaytn_logo.png';
import { TbSearch } from 'react-icons/tb';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[720px] h-[200px] bg-white to-slate-100 rounded-lg shadow-lg flex flex-col ">
        <div className="flex-none h-1/3 bg-slate-200 rounded-t-2xl"></div>
        <div className="absolute mt-4 ml-5">
          <div className="w-28 h-28 bg-white rounded-full border shadow-lg ">
            <img src={Logo} className="h-full w-full object-contain" />
          </div>
          <div className="ml-[480px] mt-[-110px] text-center">
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-slate-300 to-orange-200 w-40 h-8 rounded-lg shadow-lg flex items-center justify-center font-bold">
                <img src={klaytnLogo} className="h-4 w-4 object-center mr-3" />
                klaytn official
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 ml-4">
          <div className="font-bold text-2xl text-black">Example.YourD</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-2xl flex w-[720px] h-fit mt-5 ">
        <div>
          <div className="ml-6 mt-5">
            <div className="font-bold text-xl">Example details</div>
          </div>
          <div className="border-t border-black w-[660px] mx-6 mt-4"></div>
          <div className="flex">
            <div className="bg-slate-100 shadow-lg rounded-lg w-[318px] h-20 ml-6 mt-4">
              <div className="font-bold text-black text-sm mt-3 ml-3">
                Listed on YourD
              </div>
              <div className="font-bold text-black text-lg mt-4 ml-3">
                4 Apr 2023
              </div>
            </div>
            <div className="bg-slate-100 shadow-lg rounded-lg w-[318px] h-20 ml-6 mt-4">
              <div className="font-bold text-black text-sm mt-3 ml-3">
                Listed on YourD
              </div>
              <div className="font-bold text-black text-lg mt-4 ml-3">
                4 Sep 2023
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="bg-slate-100 shadow-lg rounded-lg w-[318px] h-20 ml-6 mt-4">
              <div className="font-bold text-black text-sm mt-3 ml-3">
                YourD ID
              </div>
              <div className="font-bold text-black text-lg mt-4 ml-3">
                12345
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-2xl flex w-[720px] h-fit mt-5 mb-6 pb-6">
        <div>
          <div className="ml-6 mt-5">
            <div className="font-bold text-sm">Example details</div>
            <div className="font-bold text-2xl">smart contracts(5)</div>
          </div>
          <div className="border-t border-black w-[660px] mx-6 mt-4"></div>
          <div className="bg-slate-50 w-[240px] h-7 ml-6 mt-3 rounded-lg">
            <div className="flex items-center justify-center">
              <TbSearch color="gray" />
              <div className="text-slate-400 ml-4">Search smart contracts</div>
            </div>
          </div>
          <div className="flex ml-6 mt-2">
            <div className="font-bold text-slate-600">Address</div>
            <div className="font-bold text-slate-600 pl-[430px]">chain</div>
            <div className="font-bold text-slate-600 pl-16">verified</div>
          </div>

          <hr className="border-t border-black mx-6"></hr>

          <div className="flex my-3 ml-5 gap-10">
            <div>0xe12314c8238334efdfc811d6f98e5962fe4461</div>
            <div className="ml-20">Klaytn</div>
            <div className="ml-4">something</div>
          </div>

          <hr className="border-black mx-6" />
          <div className="flex my-3 ml-5 gap-10">
            <div>0xe3352552c8238334efdfc811d6f98e5962fe4461</div>
            <div className="ml-20">Klaytn</div>
            <div className="ml-4">something</div>
          </div>
          <hr className="border-black mx-6" />
          <div className="flex my-3 ml-5 gap-10">
            <div>0xe3235523c8238334efdfc811d6f98e5962fe4461</div>
            <div className="ml-20">Klaytn</div>
            <div className="ml-4">something</div>
          </div>
          <hr className="border-black mx-6" />
          <div className="flex my-3 ml-5 gap-10">
            <div>0xe563231c8238334efdfc811d6f98e5962fe4461</div>
            <div className="ml-20">Klaytn</div>
            <div className="ml-4">something</div>
          </div>
          <hr className="border-black mx-6" />
          <div className="flex my-3 ml-5 gap-10">
            <div>0xe364522c8238334efdfc811d6f98e5962fe4461</div>
            <div className="ml-20">Klaytn</div>
            <div className="ml-4">something</div>
          </div>
          <hr className="border-black mx-6" />
        </div>
      </div>
    </div>
  );
}
