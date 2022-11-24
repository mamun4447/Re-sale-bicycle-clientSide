import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer";
import NavBar from "../Share/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
