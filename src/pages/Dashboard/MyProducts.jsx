import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [user?.email]);
  return <div></div>;
};

export default MyProducts;
