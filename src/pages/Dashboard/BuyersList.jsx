import React, { useState } from "react";

const BuyersList = () => {
  const [buyers, setBuyers] = useState();

  fetch(`http://localhost:5000/users/${"buyer"}`)
    .then((res) => res.json())
    .then((data) => setBuyers(data));
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
                <button className="btn bg-error border-none btn-xs">
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
