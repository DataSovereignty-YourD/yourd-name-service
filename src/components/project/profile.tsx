import { useState } from 'react';
import Logo from '../../assets/img/yourd-logo.png';
import klaytnLogo from '../../assets/img/klaytn_logo.png';
import { MdOutlineContentCopy } from 'react-icons/md';
import { HiOutlineLink } from 'react-icons/hi';
export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[720px] h-[200px] bg-white rounded-lg shadow-lg flex flex-col ">
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

      <div className="bg-white rounded-xl shadow-2xl flex w-[720px] h-fit mt-5">
        <div>
          <div className="ml-6 mt-5">
            <div className="font-bold text-xl">About Example</div>
          </div>
          <div className="border-t border-black w-[660px] mx-6 mt-4"></div>
          <div className="ml-6 mt-5">
            <div className="font-bold text-sm">describe your project</div>
          </div>
          <div className="ml-6 mt-10">
            <div className="font-bold text-lg text-slate-400">Address</div>

            <div className="mt-3">
              <div className="bg-slate-100 w-40 h-8 rounded-lg shadow-lg border border-slate-200 flex items-center justify-center">
                <img src={klaytnLogo} className="h-4 w-4 object-center ml-2" />
                <div className="font-bold text-slate-500 truncate ml-2">
                  0x2e556DB9ef3d2A1D5c08CEE007EcF1d66Aac2DE0
                </div>
                <MdOutlineContentCopy size={48} color="black" />
              </div>
            </div>
          </div>
          <div className="ml-6 mt-3">
            <div className="font-bold text-lg text-slate-400">
              Ohter Records
            </div>
            {/* //0xe3656452c8238334efdfc811d6f98e5962fe4461 */}
            <div className="mt-3">
              <div className="flex space-x-4">
                <div className="bg-slate-100 w-32 h-8 rounded-lg shadow-lg border border-slate-200 flex items-center justify-center">
                  <div className="font-bold text-slate-500 text-sm">
                    avatar
                    <div className="font-bold text-slate-500 truncate ml-2"></div>
                  </div>
                </div>
                <div className="bg-slate-100 w-32 h-8 rounded-lg shadow-lg border border-slate-200 flex items-center justify-center">
                  <div className="font-bold text-slate-500">
                    klaytn official
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-6 mt-3 ">
            <div className="font-bold text-lg text-slate-400">Ownership</div>

            <div className="mt-3 mb-4">
              <div className="flex space-x-4">
                <div className="bg-slate-100 w-56 h-8 rounded-lg shadow-lg border border-slate-200 flex items-center justify-center">
                  <div className="font-bold text-slate-500">manager</div>
                  <div className="font-bold text-black text-sm ml-3 flex items-center">
                    example.YourD
                    <HiOutlineLink className="ml-2" size={12} />
                  </div>
                </div>
                <div className="bg-slate-100 w-56 h-8 rounded-lg shadow-lg border border-slate-200 flex items-center justify-center">
                  <div className="font-bold text-slate-500">owner</div>
                  <div className="font-bold text-black text-sm ml-3 flex items-center">
                    example.YourD
                    <HiOutlineLink className="ml-2" size={12} />
                  </div>
                </div>
                <div className="bg-slate-100 w-40 h-8 rounded-lg shadow-lg border border-slate-200 flex items-center justify-center">
                  <div className="font-bold text-slate-500 ">expiry</div>
                  <div className="font-bold text-black text-sm ml-3 flex items-center">
                    4.9 2024
                    <div className="ml-2">
                      <MdOutlineContentCopy size={12} color="black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="">
          <div className="text-black font-bold">hi</div>
        </div> */
}
