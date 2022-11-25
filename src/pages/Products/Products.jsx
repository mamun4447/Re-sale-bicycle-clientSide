import React from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Buttons from "../../Components/Buttons";

const Products = () => {
  const products = useLoaderData();
  console.log(products);

  //===Booking===//
  const handleBooking = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "aplication/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  //===Repost===//w
  const handleReport = (id) => {
    fetch(`http://localhost:5000/report-product/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "aplication/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-50 px-12 py-10 gap-10">
      {products.map((product) => (
        <div
          key={product._id}
          className="overflow-hidden shadow-lg rounded-lg cursor-pointer m-auto"
        >
          <Link href="#" className="w-full block h-full">
            <img alt="" src={product.image} className=" w-full object-cover" />
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
                  className="btn btn-sm btn-error"
                >
                  Report
                </button>
                <button
                  onClick={() => handleBooking(product._id)}
                  className="btn btn-primary btn-sm"
                >
                  Book
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
