import React, { useContext } from "react";
import Spinner from "../../Components/Spinner";
import { AuthContext } from "../../Context/AuthProvider";
import Advertise from "./Advertise";
import Category from "./Category";
import Hero from "./Hero";
import SendMail from "./SendMail";

const Home = () => {
  const { loader } = useContext(AuthContext);

  return (
    <div>
      <Hero />
      <Advertise />
      <Category />
      <SendMail />
      {/* <Advertise /> */}
    </div>
  );
};

export default Home;
