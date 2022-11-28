import React from "react";
import Advertise from "./Advertise";
import Category from "./Category";
import Hero from "./Hero";
import SendMail from "./SendMail";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <SendMail />
      {/* <Advertise /> */}
    </div>
  );
};

export default Home;
