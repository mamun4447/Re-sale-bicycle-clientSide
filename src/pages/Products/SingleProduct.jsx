import React from "react";
import { Link } from "react-router-dom";
import cycleImage from "../../assets/defaultCycle.jpg";

const SingleProduct = ({ product, handleReport }) => {
  return (
    <div>
      <div
        key={product._id}
        className="overflow-hidden shadow-lg rounded-lg cursor-pointer m-auto"
      >
        <div className="w-full block h-full">
          {product?.image ? (
            <img alt="" src={product.image} className=" w-full object-cover" />
          ) : (
            <img
              alt=""
              src={cycleImage}
              className="w-full max-h-60 object-cover"
            />
          )}
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-sm font-medium">
              {product.location}
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {product.name}({product.year_used} year)
            </p>
            <div className="">
              <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                Original Price: {product.original_price}
              </p>
              <p className=" dark:text-gray-300 font-light text-md">
                Resale Price: {product.sale_price}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleReport(product._id)}
                disabled={product.status !== "available"}
                className="btn btn-sm btn-error "
              >
                Report
              </button>
              <label htmlFor="my-modal" className="btn btn-sm">
                Book now
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
