import React from "react";
import Lottie from "lottie-react";
import cycling from "../../assets/cycling.json";
import Buttons from "../../Components/Buttons";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row container mx-auto  items-center justify-center">
      <Lottie className="w-1/2" animationData={cycling} loop={true} />
      <div className="text-center md:text-end lg:text-end">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10">
          Resale or buy second hand <br className="hidden lg:block" /> cycle,
          from <span className="text-[#297B77]">Get Ride</span>
        </h1>
        <Buttons>Book Now</Buttons>
      </div>
    </div>
  );
};

export default Hero;
