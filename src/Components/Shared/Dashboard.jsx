import React from "react";
import DashboardTop from "../DashboardTop";
import BarGraph from "../BarGraph";
import ProductsTable from "../ProductsTable";
import PieChartData from "../PieChartData";

const Dashboard = () => {
  return (
    <>
      <DashboardTop />
      <div className="mt-3 flex flex-col lg:flex-row items-center justify-evenly gap-5 mx-4">
        <BarGraph />
        <PieChartData />
      </div>
      <div className="mt-5">
        <ProductsTable />
      </div>
    </>
  );
};

export default Dashboard;
