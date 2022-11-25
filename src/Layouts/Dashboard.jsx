import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../pages/Dashboard/SideNav";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
