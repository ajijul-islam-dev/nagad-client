import React, { useEffect, useState } from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import useAxios from "../../Hooks/useAxios/useAxios";

function ManageUsers() {
  const { axiosSecure } = useAxios();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/users").then((res) => setUsers(res.data));
  });


  const handleApprove = (phone)=>{
    console.log(phone)
    axiosSecure.put("/approve",{phone})
    .then(res => console.log(res.data))
  }
  return (
    <div>
      <PageBanner />
      <div className="w-full mx-auto">
        <div role="tablist" className="tabs tabs-bordered tabs-lg">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Manage"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users?.map((user, i) => (
                    <tr key={user._id}>
                      <th>{i++}</th>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>{user.role.name}</td>
                      <td>{user.role.status}</td>
                      <td>{user.balance}</td>
                     
                      <td>
                        {user.role.status === "pending" ? (
                          <button onClick={()=> handleApprove(user.phone)} className="btn btn-success">
                            Approve Request
                          </button>
                        ) : user.role.status === "blocked" ? (
                          <button className="btn btn-error">
                            Unblock Account
                          </button>
                        ) : (
                          <button className="btn btn-error">
                            Block Account
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Transaction_req"
        
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
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
                  {/* row 1 */}
                  {users?.map((user, i) => (
                    <tr key={user._id}>
                      <th>{i++}</th>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>{user.role.name}</td>
                      <td>{user.role.status}</td>
                      <td>
                        {user.role.status === "pending" ? (
                          <button onClick={()=> handleApprove(user.phone)} className="btn btn-success">
                            Accept Request
                          </button>
                        ) : user.role.status === "blocked" ? (
                          <button className="btn btn-error">
                            Unblock Account
                          </button>
                        ) : (
                          <button className="btn btn-error">
                            Block Account
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
