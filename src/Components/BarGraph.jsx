import React from "react";
import * as MdIcons from "react-icons/md";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    range : "2700",
    color :"#d2ceed"
  },
  {
    name: "Feb",
    range : "1900",
    color :"#d2ceed"
  },
  {
    name: "Mar",
    range : "3900",
    color :"#d2ceed"
  },
  {
    name: "Apr",
    range : "2800",
    color :"#d2ceed"
  },
  {
    name: "May",
    range : "3200",
    color :"#d2ceed"
  },
  {
    name: "Jun",
    range : "1500",
    color :"#d2ceed"
  },
  {
    name: "Jul",
    range : "3500",
    color :"#d2ceed"
  },
  {
    name: "Aug",
    range : "4000",
    color :"#513aef"
  },
  {
    name: "Sep",
    range : "3700",
    color :"#d2ceed"
  },
  {
    name: "Oct",
    range : "3300",
    color :"#d2ceed"
  },
  {
    name: "Nov",
    range : "3000",
    color :"#d2ceed"
  },
  {
    name: "Dec",
    range : "3700",
    color :"#d2ceed"
  },
  
];
const BarGraph = () => {
  return (
    <>
      <div className=" bg-white h-[22rem] rounded-lg w-[50rem] max-w-full overflow-hidden ">
        <div className="flex justify-between mx-4 mt-2 py-2">
          <div className="">
            <h1 className="font-semibold text-lg">Overview</h1>
            <p className="text-xs text-slate-400">Monthly Earning</p>
          </div>
          <div className="text-xs flex gap-1 items-center px-[1rem] py-0 rounded-lg bg-slate-100">
            <p className="text-xs text-slate-400">Quarterly</p>
            <span className="text-lg">
              <MdIcons.MdKeyboardArrowDown />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className=" h-[12rem] w-full max-w-full mx-3 ">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="range" radius={15} fill={data.name === "Aug"? "#513aef": "#d2ceed"}/>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mx-3 md:mx-4 gap-1">
            {data.map((data, index) =>{
              return (
                <p key={index}>{data.name}</p>
              )
            })}
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarGraph;
