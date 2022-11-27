import React from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Buttons from "../../Components/Buttons";
import BookingModal from "./BookingModal";
import SingleProduct from "./SingleProduct";

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-50 px-12 py-10 gap-10">
        {products?.map((product) => (
          <SingleProduct
            key={product._id}
            product={product}
            handleReport={handleReport}
          />
        ))}
      </div>
      {products && <BookingModal products={products} />}
    </>
  );
};

export default Products;
