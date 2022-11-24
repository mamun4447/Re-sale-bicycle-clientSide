import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  //   const { image, location, name, original_price, sale_price, year_used } =
  //     products;
  console.log(products);
  return (
    <div className="grid grid-cols-3 bg-slate-50 px-12 py-10 gap-10">
      {products.map((product) => (
        <div
          key={product._id}
          className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
        >
          <Link href="#" className="w-full block h-full">
            <img
              alt=""
              src={product.image}
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-indigo-500 text-md font-medium">Article</p>
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {product.name}
              </p>
              <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                The new supercar is here, 543 cv and 140 000$. This is best
                racing GT about 7 years on...
              </p>
              <div className="flex items-center mt-4">
                <Link href="#" className="block relative">
                  <img
                    alt="profil"
                    src={product.image}
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </Link>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                  <p className="text-gray-400 dark:text-gray-300">
                    20 mars 2029 - 6 min read
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
