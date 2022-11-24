import React from "react";
import Buttons from "../../Components/Buttons";

const Category = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl md:text-5xl">
        <span className="text-[#297B77]">Brand</span> Name
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
        <div className="flex items-center justify-center">
          <img
            className="w-8 rounded-full"
            src="https://m.media-amazon.com/images/I/61IlCkBgMpL._SX425_.jpg"
            alt=""
          />
          <h4>Name</h4>
          <p>legnth</p>
        </div>
        <div>
          <img
            className="w-8 rounded-full"
            src="https://m.media-amazon.com/images/I/61IlCkBgMpL._SX425_.jpg"
            alt=""
          />
          <h4>Name</h4>
          <p>legnth</p>
        </div>
        <div>
          <img
            className="w-8 rounded-full"
            src="https://m.media-amazon.com/images/I/61IlCkBgMpL._SX425_.jpg"
            alt=""
          />
          <h4>Name</h4>
          <p>legnth</p>
        </div>
        <div>
          <img
            className="w-8 rounded-full"
            src="https://m.media-amazon.com/images/I/61IlCkBgMpL._SX425_.jpg"
            alt=""
          />
          <h4>Name</h4>
          <p>legnth</p>
        </div>
      </div>
      <Buttons>Add Categories</Buttons>
    </div>
  );
};

export default Category;
