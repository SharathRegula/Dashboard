import React from "react";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import maze from "./Data/productsflap.jpg";
import maze1 from "./Data/cloth.jpg";
import maze2 from "./Data/laptop.jpg";
import maze3 from "./Data/maze1.jpg";
import maze4 from "./Data/mobile.jpg";
import maze5 from "./Data/background.jpg";

const data = [
  {
    img: maze,
    title: "Abstract 3D",
    desc: "A collection of abstract shapes that will make your room look modern and unique.",
    val1: " 10 in stock",
    val2: "$ 50.99",
    val3: "50",
  },
  {
    img: maze1,
    title: "Shopping",
    desc: "A collection of clothes that will make your room look modern and unique.",
    val1: "3 in stock",
    val2: "$ 450.99",
    val3: "200",
  },
  {
    img: maze2,
    title: "Laptops",
    desc: "A collection of Laptops that will make your room look modern and unique.",
    val1: "30 in stock",
    val2: "$ 500.100",
    val3: "100",
  },
  {
    img: maze3,
    title: "Background",
    desc: "A collection of Background that will make your room look modern and unique.",
    val1: "56 in stock",
    val2: "$ 125.20",
    val3: "25",
  },
  {
    img: maze4,
    title: "Mobiles",
    desc: "A collection of Mobiles that will make your room look modern and unique.",
    val1: "out of stock",
    val2: "$ 355.90",
    val3: "300",
  },
  {
    img: maze5,
    title: "Abstract 3D",
    desc: "A collection of abstract shapes that will make your room look modern and unique.",
    val1: "12 in stock",
    val2: "$ 450",
    val3: "240",
  },
  {
    img: maze5,
    title: "Abstract 3D",
    desc: "A collection of abstract shapes that will make your room look modern and unique.",
    val1: "12 in stock",
    val2: "$ 450",
    val3: "240",
  },
  {
    img: maze5,
    title: "Abstract 3D",
    desc: "A collection of abstract shapes that will make your room look modern and unique.",
    val1: "12 in stock",
    val2: "$ 450",
    val3: "240",
  },
  {
    img: maze5,
    title: "Abstract 3D",
    desc: "A collection of abstract shapes that will make your room look modern and unique.",
    val1: "12 in stock",
    val2: "$ 450",
    val3: "240",
  },
  {
    img: maze5,
    title: "Abstract 3D",
    desc: "A collection of abstract shapes that will make your room look modern and unique.",
    val1: "12 in stock",
    val2: "$ 450",
    val3: "240",
  },
];

export default function ProductsTable() {
  return (
    <>
      <div className="bg-white h-[35rem] w-[95%] max-w-full overflow-hidden p-3 md:p-6 mx-auto rounded-lg">
        <div className="flex justify-between items-center m-auto">
          <p className="font-semibold text-black text-sm">Products Sell</p>
          <div className="flex items-end gap-3">
            <div className="search_bar hidden  bg-slate-50 md:flex items-center border-2 px-[5px] py-[1px] border-gray-100 rounded-lg text-xs gap-2">
              <span className="relative text-gray-500 text-xl">
                <BsIcons.BsSearch />
              </span>
              <input
                className="w-[7rem] px-[5px] bg-slate-50 relative outline-none"
                type="search"
                name="Search"
                id=""
                placeholder="Search"
              />
            </div>
            <div className="flex items-center border-1 border-gray-200">
              <p className="text-xs text-gray-400">Last 30 days</p>{" "}
              <span className="text-lg">
                <MdIcons.MdKeyboardArrowDown />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs mt-5 text-gray-400 mx-auto">
          <p>Products Name</p>
          <div className="flex items-center gap-3 md:gap-9 ">
            <p>Stock</p>
            <p>Price</p>
            <p>Total Sales</p>
          </div>
        </div>
        <hr />
        <hr />
        <div className="space-y-6 h-[100%] mb-6 relative w-[100%] max-w-full overflow-y-auto scroll-smooth">
          {data.map((values, i) => {
            return (
              <div>
                <div className="flex justify-between items-center mt-3 mx-auto ">
                  <div className="flex items-center gap-6">
                    <img
                      className="h-[2rem] w-[3.5rem] rounded-lg"
                      src={values.img}
                      alt="img1"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-sm font-semibold">{values.title}</p>
                      <p className="text-xs text-gray-400">{values.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-8 mr-4 mx-auto text-xs text-gray-400  ">
                    <p className="text-center">{values.val1}</p>
                    <p className="text-black text-sm">{values.val2}</p>
                    <p>{values.val3}</p>
                  </div>
                </div>
                <br />
                <hr />
              </div>
            );
          })}
        </div>
        <hr />
        <hr />
      </div>
    </>
  );
}
