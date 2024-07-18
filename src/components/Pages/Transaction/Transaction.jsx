import React, { useContext, useEffect, useState } from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import useAxios from "../../Hooks/useAxios/useAxios";
import { AuthContext } from "../../../Providers/AuthProvider";

function Transaction() {
  const {axiosSecure} = useAxios();
  const {user} = useContext(AuthContext);

  const [transactions,setTransactions] = useState([]);

  const info = {
    phone : user?.phone
  }
  useEffect(()=>{
    axiosSecure.get(`/transactions?phone=${info.phone}`)
    .then(res => setTransactions(res.data))
  })

  return (
    <div>
      <PageBanner />
      <div className="w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
            {transactions?.map((req,i) => (
                <tr key={req._id}>
                  <th key={req._id}>{i+1}</th>
                  <td>{req.reciverNumber}</td>
                  <td>{req.amount}</td>
                 
                  <td>{req.type}</td>

                  <td>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
