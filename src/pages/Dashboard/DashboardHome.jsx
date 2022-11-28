import React, { useContext } from "react";
import Spinner from "../../Components/Spinner";
import { AuthContext } from "../../Context/AuthProvider";

const DashboardHome = () => {
  const { loader } = useContext(AuthContext);

  if (loader) {
    <Spinner />;
  }
  return (
    <div className="text-center  flex-1 ">
      <h1 className="text-5xl ">Welcome!</h1>
    </div>
  );
};

export default DashboardHome;
