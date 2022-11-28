import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const SalersList = () => {
  const [salers, setSallers] = useState();

  fetch(`http://localhost:5000/users/${"saler"}`)
    .then((res) => res.json())
    .then((data) => setSallers(data));

  const handleDelete = (id) => {
    const action = window.confirm("Are you sure for deleteting?");

    if (action) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(data?.message);
        });
    }
  };
  return (
    <div className="overflow-x-auto w-full container ml-3 mt-5">
      <table className="table w-full ">
        <thead className="">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {salers?.map((saler, i) => (
            <tr className="hover">
              <th>{i}</th>
              <td>{saler.name}</td>
              <td>{saler.email}</td>
              <td>
                <button className="btn btn-sm">Make Admin</button>
                <button
                  onClick={() => handleDelete(saler._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalersList;
