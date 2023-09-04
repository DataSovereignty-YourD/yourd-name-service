import { useState } from 'react';
import Logo from '../../assets/dapplogo/klayswap.png';
import klaytnLogo from '../../assets/img/klaytn_logo.png';
import { MdOutlineContentCopy } from 'react-icons/md';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';
import linkedin from '../../assets/img/linkedin.png';
import discord from '../../assets/img/discord.png';
import LocalPush from '../../hooks/locolPush';
import verify from '../../assets/img/verified.png';
export default function Profile() {
  type CopyButtonProps = {
    data: string;
  };

  const addresses = [
    {
      title: 'DID',
      content: 'did:klaytn:cypress:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58',
      iconSize: 36,
      img: klaytnLogo,
    },
    {
      title: 'Contract Address',
      content: '0x60ad57f39b235640df83e434caab2dfa6a62838b',
      iconSize: 24,
      img: klaytnLogo,
    },
    {
      title: 'Service Address',
      content: 'http://example.xyz',
      iconSize: 20,
      img: '',
    },
  ];
  const images = ['이미지 URL 1', '이미지 URL 2', '이미지 URL 3'];

  const [isAddress, setIsAddress] = useState(false);
  const handleAddressToggle = () => {
    setIsAddress(!isAddress);
  };
  const [showNotification, setShowNotification] = useState(false);

  const CopyButton: React.FC<CopyButtonProps> = ({ data }) => (
    <button
      onClick={() => {
        navigator.clipboard.writeText(data);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 4000);
      }}
    >
      <MdOutlineContentCopy size={20} className=" sm:hidden" color={'gray'} />
      <MdOutlineContentCopy
        size={16}
        className=" hidden sm:inline-block"
        color={'gray'}
      />
    </button>
  );

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" min-w-max w-full h-[200px] bg-white rounded-lg shadow-lg flex flex-col ">
        <div className=" w-full flex h-1/3 bg-slate-200 rounded-t-2xl items-center justify-end">
          <div className=" mr-4 bg-gradient-to-r from-slate-300 to-orange-200 w-40 h-8 rounded-lg shadow-lg flex items-center justify-center font-bold">
            <img src={klaytnLogo} className=" h-4 w-4 object-center mr-3" />
            klaytn official
          </div>
        </div>
        <div className=" absolute mt-4 ml-5">
          <div className=" w-28 h-28 bg-white rounded-full border shadow-lg">
            <img src={Logo} className=" h-full w-full rounded-full object-contain" />
          </div>
        </div>
        <div className=" flex mt-20 mx-6">
        <div className=" font-bold text-2xl text-black">DNS&nbsp;:&nbsp; KlaySwap</div>
          <img src={verify} className=" h-7 w-7" />
        </div>
      </div>
      <div className=" flex w-full flex-col items-center justify-center ">
        <div className=" bg-white px-2 rounded-xl shadow-2xl flex w-full h-[480px] mt-5 ">
          <div className=" w-full">
            <div className=" flex mx-6 mt-5 justify-between">
              <div className=" font-bold text-xl">About Service</div>
              <div className=" flex gap-2 ">
                <img src={linkedin} className=" w-8 h-8 hover:opacity-70" />
                <img src={twitter} className=" w-8 h-8 hover:opacity-70" />
                <img src={instagram} className=" w-8 h-8 hover:opacity-70" />
                <img src={discord} className=" w-8 h-8 hover:opacity-70" />
              </div>
            </div>
            <div className=" mx-6 mt-5">
              <div className=" font-bold text-sm">
                describe your project/ 서비스 설명칸입니다
              </div>
            </div>
            {addresses.map((address, index) => (
              <div key={index} className=" mx-6 mt-8">
                <div className=" font-bold text-lg text-slate-400">
                  {address.title}
                </div>
                <div className=" mt-3">
                  <div className=" bg-slate-100 w-96 h-10 rounded-lg shadow-lg border border-slate-200 flex items-center justify-between px-2">
                    {address.img !== '' && (
                      <img
                        src={address.img}
                        className=" h-4 w-4 object-center ml-2"
                      />
                    )}
                    <div className=" font-bold text-slate-500 truncate ml-2">
                      {address.content}
                    </div>
                    <CopyButton data={address.content} />
                    {showNotification && (
                      <LocalPush
                        message="Successfully Copied!"
                        type="success"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full h-[240px] bg-white rounded-lg shadow-lg mt-4 mb-6">
          <div className=" px-6 flex space-x-6 py-4">
            {images.map((image, index) => (
              <div
                key={index}
                className=" w-[210px] h-[200px] bg-sky-50 border border-black"
              >
                <img
                  src={image}
                  alt={`이미지 ${index + 1}`}
                  className=" h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
