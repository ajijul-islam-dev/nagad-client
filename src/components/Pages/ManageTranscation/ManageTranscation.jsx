import React, { useContext, useEffect, useState } from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import useAxios from "../../Hooks/useAxios/useAxios";
import { AuthContext } from "../../../Providers/AuthProvider";

function ManageTranscation() {
  const { axiosSecure } = useAxios();
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/requests?phone=${user.phone}`)
      .then((res) => setRequests(res.data));
  });

  const handleAccept = (req) => {
    axiosSecure.put("/accept", req).then((res) => console.log(res.data));
  };

  return (
    <div  className="">
      <PageBanner />
      <div className="w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Recevier</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req,i) => (
                <tr key={req._id}>
                  <th key={req._id}>{i+1}</th>
                  <td>{req.reciverNumber}</td>
                  <td>{req.amount}</td>
                 
                  <td>{req.type}</td>

                  <td>{req.status}</td>
                  <td>
                    {req.status === "pending" ? <button
                      onClick={() => handleAccept(req)}
                      className="btn btn-success"
                    >
                      Accept
                    </button> : <button className="btn btn-sm btn-disabled">Approved</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageTranscation;
