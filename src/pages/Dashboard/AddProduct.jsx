import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import CategoryHooks from "../../Hooks/CategoryHooks";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [categories] = CategoryHooks();
  const [imageUrl, setImageUrl] = useState();

  const handleForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const category = form.category.value;
    const category_Data = categories.find((cat) => cat.name === category);
    const category_id = category_Data._id;
    const name = form.name.value;
    const phone = form.phone.value;
    const condition = form.condition.value;
    const location = form.location.value;
    const year = form.year.value;
    const originalPrice = form.originalPrice.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.files[0];
    // console.log(category_id);

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=1b41abcbd3e3a0a9277f75dc7cb38414`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => setImageUrl(imgData.data.url));

    const productInfo = {
      category,
      category_Id: category_id,
      saler_email: user.email,
      name,
      phone,
      condition,
      location,
      year_used: year,
      original_price: originalPrice,
      sale_price: price,
      description,
      image: imageUrl,

      status: "available",
      report: "false",
      sponser: "false",
    };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product created successfully!");
      });
  };
  return (
    <div className="flex justify-center items-center w-full">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form onSubmit={handleForm}>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Category */}
            <div className="">
              <label className="text-gray-700 dark:text-gray-200">
                Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full max-w-xs "
              >
                {categories.map((category) => (
                  <option key={category._id}>{category.name}</option>
                ))}
              </select>
            </div>
            {/* name */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* phone */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">Mobile</label>
              <input
                type="text"
                name="phone"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* Condition */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Condition Type
              </label>
              <select
                name="condition"
                className="select select-bordered w-full max-w-xs "
              >
                <option>Exellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Location
              </label>
              <input
                type="text"
                name="location"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* Year of used */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Year of used
              </label>
              <input
                name="year"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* Image */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">Image</label>
              <input
                name="image"
                type="file"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* Original Price */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Original Price
              </label>
              <input
                name="originalPrice"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* Price */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">Price</label>
              <input
                name="price"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          {/* Description */}
          <div className="mt-5">
            <label className="text-gray-700 dark:text-gray-200">
              Descriptions
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Text..."
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
