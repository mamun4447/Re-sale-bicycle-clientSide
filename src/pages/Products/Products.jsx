import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Buttons from "../../Components/Buttons";
import Spinner from "../../Components/Spinner";
import { AuthContext } from "../../Context/AuthProvider";
import BookingModal from "./BookingModal";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const products = useLoaderData();
  console.log(products);

  const { loader } = useContext(AuthContext);

  if (loader) {
    return <Spinner />;
  }

  //===Booking===//
  const handleBooking = (id) => {
    fetch(`https://cycle-server.vercel.app/products/${id}`, {
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
    fetch(`https://cycle-server.vercel.app/report-product/${id}`, {
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
