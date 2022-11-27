import { useEffect, useState } from "react";

const CategoryHooks = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
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
