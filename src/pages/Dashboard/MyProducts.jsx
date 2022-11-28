import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import image from "../../assets/defaultCycle.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyProducts = () => {
  const { user, LogOut } = useContext(AuthContext);

  const [products, setProducts] = useState();
  const navigate = useNavigate();

  const handleBoost = (id) => {
    const boostInfo = products.find((product) => product._id === id);

    fetch(`http://localhost:5000/boost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(boostInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/my-products/${user?.email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.message) {
          toast.error(data.message);
          navigate("/");
          LogOut();
        } else {
          setProducts(data);
        }
      });
  }, [navigate, LogOut, user?.email]);
  return (
    <div className="w-full ml-5 mt-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Details</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {products?.map((product) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {product?.image ? (
                          <img
                            src={product?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        ) : (
                          <img
                            src={image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.name}</div>
                      <div className="text-sm opacity-50">
                        {product?.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Price: ${product.sale_price}
                  </span>
                </td>
                {product?.sponser === "false" && (
                  <td>
                    <button
                      onClick={() => handleBoost(product._id)}
                      className="btn btn-xs"
                    >
                      Boost
                    </button>
                  </td>
                )}
                <td>
                  <button className="btn btn-error btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
