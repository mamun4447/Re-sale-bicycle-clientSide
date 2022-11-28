import React from "react";

const Buttons = ({ children }) => {
  return (
    <button className="btn bg-[#297B77] text-white hover:text-white border-none transition">
      {children}
    </button>
  );
};

export default Buttons;
