import Klay from "../../assets/img/fuckyou-klay.png";
import { BsList } from "react-icons/bs";
import { IoAppsSharp } from "react-icons/io5";

export default function Collection() {
  return (
    <div className=" flex-col gap-4 mt-10 w-fit h-fit items-center justify-center  p-4 rounded-md">
      <div className="flex justify-between mx-5">
        <div className="flex gap-4 ">
          <button className=" p-3 rounded-md shadow-md bg-red-500 text-lg text-white font-semibold">
            Show ALL
          </button>
          <button className=" p-3 rounded-md shadow-md bg-red-500 text-lg text-white font-semibold">
            Domains
          </button>
          <button className=" p-3 rounded-md shadow-md bg-red-500 text-lg text-white font-semibold">
            Subdomains
          </button>
          <button className=" p-3 rounded-md shadow-md bg-red-500 text-lg text-white font-semibold">
            NFTs
          </button>
        </div>
        <div className="gap-3">
          <button>
            <BsList size={36} />
          </button>
          <button>
            <IoAppsSharp size={36} />
          </button>
        </div>
      </div>
      <div className=" mt-10 flex flex-col justify-start">
        <div className="flex gap-5 my-4 mx-3 ">
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
        </div>
        <div className="flex gap-5 my-4 mx-3 ">
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
        </div>
        <div className="flex gap-5 my-4 mx-3 ">
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
        </div>
        <div className="flex gap-5 my-4 mx-3 ">
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
        </div>
        <div className="flex gap-5 my-4 mx-3 ">
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
          <img src={Klay} alt="" />
        </div>
      </div>
    </div>
  );
}
