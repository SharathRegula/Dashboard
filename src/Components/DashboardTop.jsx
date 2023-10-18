import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as PiIcons from "react-icons/pi";
import * as BsIcons from "react-icons/bs";

const DashboardTop = () => {
  return (
    <>
      <div className="mt-4 place-items-center gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <a
          href="/"
          className="card bg-white h-[8rem] w-[16rem] max-w-full flex items-center gap-3 p-4 rounded-md"
        >
          <div className="bg-green-200 rounded-full h-[5.5rem] w-[5.5rem] flex items-center justify-center">
            <span className="text-4xl text-green-600 font-bold">
              <AiIcons.AiOutlineDollarCircle />
            </span>
          </div>
          <div>
            <p className="flex flex-col justify-center text-xs">
              <p className="text-xs font-semibold">Earning</p>
              <p className="font-bold text-lg text-black">$198k </p>
              <p className="flex items-center text-green-400">
                <span className="text-xl">
                  <BiIcons.BiUpArrowAlt />
                </span>
                37.8%
                <span className="text-gray-300 mx-1 ">this month</span>
              </p>
            </p>
          </div>
        </a>
        <a
          href="/"
          className="card bg-white h-[8rem] w-[16rem] max-w-full flex items-center gap-3 p-4 rounded-md "
        >
          <div className="bg-violet-300 rounded-full h-[5.5rem] w-[5.5rem] flex items-center justify-center">
            <span className="text-4xl text-violet-500-500 font-bold">
              <PiIcons.PiPaperPlaneTiltThin />
            </span>
          </div>
          <div>
            <p className="flex flex-col justify-center text-xs">
              <p className="text-xs font-semibold">Orders</p>
              <p className="font-bold text-lg text-black">$2.4k </p>
              <p className="flex items-center text-red-400">
                <span className="text-xl">
                  <BiIcons.BiDownArrowAlt />
                </span>
                2%
                <span className="text-gray-300 mx-1 ">this month</span>
              </p>
            </p>
          </div>
        </a>
        <a
          href="/"
          className="card bg-white h-[8rem] w-[16rem] max-w-full flex items-center gap-3 p-4 rounded-md "
        >
          <div className="bg-blue-300 rounded-full h-[5.5rem] w-[5.5rem] flex items-center justify-center">
            <span className="text-4xl text-blue-800 font-bold">
              <FaIcons.FaBalanceScaleLeft />
            </span>
          </div>
          <div>
            <p className="flex flex-col justify-center text-xs">
              <p className="text-xs font-semibold">Balance</p>
              <p className="font-bold text-lg text-black">$2.4k </p>
              <p className="flex items-center text-red-400">
                <span className="text-xl">
                  <BiIcons.BiDownArrowAlt />
                </span>
                2%
                <span className="text-gray-300 mx-1 ">this month</span>
              </p>
            </p>
          </div>
        </a>
        <a
          href="/"
          className="card bg-white h-[8rem] w-[16rem] max-w-full flex items-center gap-3 p-4 rounded-md "
        >
          <div className="bg-pink-300 rounded-full h-[5.5rem] w-[5.5rem] flex items-center justify-center">
            <span className="text-4xl text-red-500 font-bold">
              <BsIcons.BsFillBagFill />
            </span>
          </div>
          <div>
            <p className="flex flex-col justify-center text-xs">
              <p className="text-xs font-semibold">Total Sales</p>
              <p className="font-bold text-lg text-black">$89k </p>
              <p className="flex items-center text-green-400">
                <span className="text-xl">
                  <BiIcons.BiUpArrowAlt />
                </span>
                11%
                <span className="text-gray-300 mx-1 ">this week</span>
              </p>
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default DashboardTop;
