import React, { useEffect, useState } from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import useAxios from "../../Hooks/useAxios/useAxios";
import { toast } from "react-toastify";

function ManageUsers() {
  const { axiosSecure } = useAxios();

  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axiosSecure.get("/users").then((res) => setUsers(res.data));
  };

  const handleApprove = (phone) => {
    console.log(phone);
    axiosSecure
      .put("/approve", { phone })
      .then((res) => {
        loadUsers();
        return toast.success("Account Approved");
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };

  const handleBlock = (id) => {
    axiosSecure
      .put("/block", { id })
      .then((res) => {
        toast.success("Account Blocked");
        loadUsers();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleUnblock = (id) => {
    axiosSecure
      .put("/unBlock", { id })
      .then((res) => {
        toast.success("Account Unblocked");
        loadUsers();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSearch = (text) => {
    axiosSecure
      .get(`/search?s=${text}`)
      .then((res) => setUsers(res.data))
      .catch((err) => toast.err(err.messages));
  };

  const handleSort = (text) => {
    axiosSecure
      .get(`/sort?s=${text}`)
      .then((res) => setUsers(res.data))
      .catch((err) => toast.err(err.messages));
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <PageBanner />
      <div className="w-[90%] mx-auto my-20">
        <div className="flex justify-between items-center my-10">
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="select select-secondary w-full max-w-xs"
          >
            <option selected disabled>
              Search by Role
            </option>
            <option>user</option>
            <option>admin</option>
            <option>agent</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Role</th>
                <th>Staus</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.role.name}</td>
                  <td>{user.role.status}</td>
                  <td>{user.balance}</td>

                  <td>
                    {user.role.status === "pending" ? (
                      <button
                        onClick={() => handleApprove(user.phone)}
                        className="btn btn-success"
                      >
                        Approve Request
                      </button>
                    ) : user.role.status === "blocked" ? (
                      <button
                        onClick={() => handleUnblock(user._id)}
                        className="btn btn-primary"
                      >
                        Unblock Account
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBlock(user._id)}
                        className="btn btn-error"
                      >
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
  );
}

export default ManageUsers;
