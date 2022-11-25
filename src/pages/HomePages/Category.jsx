import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../Components/Buttons";
import CategoryHooks from "../../useHooks/CategoryHooks";

const Category = () => {
  const [categories] = CategoryHooks();
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl md:text-5xl">
        <span className="text-[#297B77]">Brand</span> Name
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 mb-10 gap-4">
        {categories.map((category) => (
          <Link
            to={`/categories/${category._id}`}
            key={category._id}
            className="flex p-10 rounded-md shadow-xl hover:-translate-y-1 transition"
          >
            <img
              className="w-12 rounded-full mr-5"
              src={category.image}
              alt=""
            />
            <div className="flex flex-col">
              <h4 className="text-xl">{category.name}</h4>
              <p className="text-gray-400">legnth</p>
            </div>
          </Link>
        ))}
      </div>
      <Buttons>Add Categories</Buttons>
    </div>
  );
};

export default Category;
