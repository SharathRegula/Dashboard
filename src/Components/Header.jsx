import React from "react";
import * as BsIcons from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="p-3 flex justify-between items-center mt-[4rem] md:mt-0">
        <div className="flex p-2 font-bold text-lg rounded-lg bg-slate-300">
          <h1 className="flex items-center gap-1 ">
            Hello Rohan <p className="text-xl">&#128075; ,</p>
          </h1>
        </div>
        <div className="search_bar hidden bg-white md:flex items-center border-2 border-gray-300 px-2 py-1 rounded-lg gap-2">
          <span className="relative text-gray-500 text-xl">
            <BsIcons.BsSearch />
          </span>
          <input
            className="p-2 relative outline-none"
            type="search"
            name="Search"
            id=""
            placeholder="Search"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
