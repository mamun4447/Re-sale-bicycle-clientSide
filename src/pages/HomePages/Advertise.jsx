import React from "react";
import { useState } from "react";

const Advertise = () => {
  const [products, setProducts] = useState();

  fetch("https://cycle-server.vercel.app/boost")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setProducts(data);
    });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-50 my-20 py-10 px-3 gap-4">
      {products?.map((product) => (
        <div aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={product.image}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                {product.category}
              </p>
              <br />
              <p className="text-sm tracking-wide text-gray-300">
                {product.name}
              </p>
              <br />
              <p className="text-sm tracking-wide text-gray-300">
                Price: {product.sale_price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advertise;
