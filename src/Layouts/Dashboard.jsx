import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../pages/Dashboard/SideNav";

const Dashboard = () => {
  return (
    <div>
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
