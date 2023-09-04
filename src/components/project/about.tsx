import { useState } from 'react';
import Logo from '../../assets/dapplogo/klayswap.png';
import klaytnLogo from '../../assets/img/klaytn_logo.png';
import { TbSearch } from 'react-icons/tb';
import verify from '../../assets/img/verified.png';
import { BsCheckAll } from 'react-icons/bs';

export default function About() {
  const contracts = [
    {
      address: '0x30kb37f39b2s3240df83e434caab12dfa6a628b',
      chain: 'Klaytn',
      verified: true,
    },
    {
      address: '0x1462040a8d3f4242e3b3411573sv40236167e1f',
      chain: 'Klaytn',
      verified: true,
    },
    {
      address: '0x241acsq235fsd102a22cbb26176356efeb0bf64',
      chain: 'Klaytn',
      verified: true,
    },
    {
      address: '0x813vsqz351ged122a22cbb26171642hfeb0bfb5h',
      chain: 'Klaytn',
      verified: true,
    },
    {
      address: '0xz36zqhj241ged1d2a32cvb46111642ghew1nf433',
      chain: 'Klaytn',
      verified: true,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" min-w-max w-full h-[200px] bg-white rounded-lg shadow-lg flex flex-col ">
        <div className=" w-full flex h-1/3 bg-slate-200 rounded-t-2xl items-center justify-end">
          <div className=" mr-4 bg-gradient-to-r from-slate-300 to-orange-200 w-40 h-8 rounded-lg shadow-lg flex items-center justify-center font-bold">
            <img src={klaytnLogo} className=" h-4 w-4 object-center mr-3" />
            klaytn official
          </div>
        </div>
        <div className=" absolute mt-4 mx-5">
          <div className=" w-28 h-28 bg-white rounded-full border shadow-lg">
            <img
              src={Logo}
              className=" h-full w-full rounded-full object-contain"
            />
          </div>
        </div>
        <div className=" flex mt-20 mx-6">
          <div className=" font-bold text-2xl text-black">DNS&nbsp;:&nbsp; KlaySwap</div>
          <img src={verify} className=" h-7 w-7" />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-2xl flex w-full h-fit mt-5 mb-3 ">
        <div>
          <div className="ml-6 mt-5">
            <div className="font-bold text-xl">DID Verification Method</div>
          </div>
          <div className="border-t border-black w-[660px] mx-6 mt-4"></div>
          <div className="w-full h-[240px] bg-white shadow-lg rounded-b-lg  ">
            <div className="font-bold text-lg text-black ml-5 mt-2">
              ID
              <div className="text-sm font-semibold">
                did:klaytn:cypress:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58#key-default
              </div>
            </div>
            <div className="font-bold text-lg text-black ml-5 mt-2">
              Type
              <div className="text-sm font-semibold">
                EcdsaSecp256k1VerificationKey2019
              </div>
            </div>
            <div className="font-bold text-lg text-black ml-5 mt-2">
              Controller
              <div className="text-sm font-semibold">
                did:klaytn:cypress:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58
              </div>
            </div>
            <div className="font-bold text-lg text-black ml-5 mt-2">
              PublicKeyMultibase
              <div className="text-sm font-semibold">
                A_Huy4IDtm0reCw0AgvZ-PbOKXaNpjcLbxCdCK3iBzky
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-2xl flex w-full h-fit mt-5 mb-6 pb-6">
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
          <div className="grid grid-cols-12 mt-2 mx-6">
            <div className="font-bold col-span-8 text-slate-600 ">Address</div>
            <div className="font-bold col-span-2 text-slate-600 ">chain</div>
            <div className="font-bold col-span-2 text-slate-600">verified</div>
          </div>
          <hr className="border-t border-black mx-6"></hr>
          {contracts.map((contract, index) => (
            <div key={index}>
              <div className="grid grid-cols-12 mx-6 mt-4 mb-4">
                <div className="col-span-8">{contract.address}</div>
                <div className="col-span-2">{contract.chain}</div>
                <div className="col-span-2 ml-5">
                  {contract.verified ? (
                    <BsCheckAll size={24} color="green" />
                  ) : null}
                </div>
              </div>
              <hr className="border-black mx-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
