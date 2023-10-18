import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400, color: "#0088FE" },
  { name: "Group B", value: 300, color: "#00C49F" },
  { name: "Group C", value: 300, color: "#FFBB28" },
  // { name: "Group D", value: 200, color: "#FF8042" },
];

export default function PieChartData() {
  return (
    <>
      <div className=" bg-white h-[22rem] w-[22rem] max-w-full rounded-lg ">
        <div className="px-3 py-2">
          <h1 className="font-semibold text-lg">Customers</h1>
          <p className="text-xs text-slate-400">Customer that by products</p>
        </div>
          <ResponsiveContainer style={{margin:"-5rem 3rem", position:"absolute"}}>
            <PieChart width={"99%"} height={300}>
              <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((e, index) => (
                  <Cell key={index} fill={e.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
            <p className="relative font-bold grid place-items-center my-[6rem] mx-[8rem] px-[17px] py-[2px]">65% <span className="text-xs font-medium">Total new customers</span></p>
         
      </div>
    </>
  );
}
