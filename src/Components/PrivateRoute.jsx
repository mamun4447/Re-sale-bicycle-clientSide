import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} replace>
        {toast.error("Can't access without logIn")}
      </Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
