import React from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import Dashboard from "./Dashboard";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
    <div className="flex overflow-hidden">
      <NavBar />
      <div className="flex-1  bg-slate-50 h-screen relative w-screen overflow-x-hidden overflow-y-auto">
        <div className="overflow-hidden overflow-x-hidden">
        <Header />
        <Dashboard />
        <Footer/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Layout;
