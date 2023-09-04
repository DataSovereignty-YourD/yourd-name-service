import logo1 from "../../assets/img/yourd-logo.png";

import { TestData } from "./test";

export default function DomainsList() {
  return (
    <div className="border border-red-700 w-fit items-center justify-center mx-auto ">
      <div className="border border-red-700 mx-80 flex  gap-10 mt-20  items-center   border border-gray-200 p-4 rounded-md">
        <button>All</button>
        <button>Apps</button>
      </div>
      <div className="border border-red-700  rounded-3xl border border-gray-500 flex  mt-20  items-center justify-center  p-4 w-fit">
        <div className="border border-red-700  gap-16 border-b-2  grid  grid-cols-3">
          {TestData.map((test, index) => (
            <div
              key={index}
              className="border border-red-700 gap-5 flex justify-between   px-3 py-2"
            >
              <div className="flex flex-col">
                <div className="flex ">
                  <img
                    src={logo1}
                    className="border border-red-700  mt-10 mb-5 my-10 w-40 h-32"
                    alt=""
                  />

                  <div className="border border-red-700 flex flex-col my-auto text-lg mr-10">
                    <div className="border border-red-700  flex w-10 ">
                      {test.name}
                    </div>

                    <div className="border border-red-700 flex gap-5 text-md text-gray-500 text-lg">
                      <div className="border border-red-700 border border-gray-400 rounded-2xl py-1 px-3">
                        {test.category[0]}
                      </div>
                      <div className="border border-red-700 border border-gray-400 rounded-2xl py-1 px-3">
                        {test.category[1]}
                      </div>
                      <div className="border border-red-700 border border-gray-400 rounded-2xl py-1 px-3">
                        {test.category[2]}
                      </div>
                    </div>
                    <div className="border border-red-700 text-[32px] text-gray-500 mx-2 my-4">
                      {test.description}
                    </div>
                  </div>
                </div>
                <div className="border border-red-700  flex items-center justify-between  gap-10 text-lg">
                  <div className="border border-red-700   border border-gray-300 items-center justify-center flex rounded-3xl font-bold py-5 w-full ">
                    view details
                  </div>
                  <div className="border border-red-700  border border-gray-300 items-center justify-center flex rounded-3xl text-blue-600 font-bold py-5 w-full">
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
