import React, { useState } from "react";
import toast from "react-hot-toast";

const BuyersList = () => {
  const [buyers, setBuyers] = useState();

  fetch(`https://cycle-server.vercel.app/users/${"buyer"}`)
    .then((res) => res.json())
    .then((data) => setBuyers(data));

  const handleDelete = (id) => {
    const action = window.confirm("Are you sure for deleteting?");

    if (action) {
      fetch(`https://cycle-server.vercel.app/users/${id}`, {
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
    <div className="w-full mt-10">
      <table className="table w-full ml-5">
        <thead className="h-20 ">
          <tr>
            <th>Profile</th>

            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {buyers?.map((buyer, i) => (
          <tbody>
            <tr className="ml-5 ">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={buyer.imageUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{buyer.name}</div>
                  </div>
                </div>
              </td>
              <td>{buyer.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(buyer._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default BuyersList;
