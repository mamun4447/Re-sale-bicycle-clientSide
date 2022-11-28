import { useEffect, useState } from "react";

const CategoryHooks = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://cycle-server.vercel.app/categories", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return [categories];
};

export default CategoryHooks;
