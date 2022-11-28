import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { AuthContext } from "../Context/AuthProvider";
import SideNav from "../pages/Dashboard/SideNav";

const Dashboard = () => {
  const { loader } = useContext(AuthContext);

  if (loader) {
    return <Spinner />;
  }
  return (
    <div className="flex">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
