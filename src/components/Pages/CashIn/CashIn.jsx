import React, { useContext } from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import { CiPhone, CiUnlock } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxios from "../../Hooks/useAxios/useAxios";
import { toast } from "react-toastify";

function CashIn() {
  const { axiosSecure } = useAxios();
  const { user } = useContext(AuthContext);
  const handleCashIn = (e) => {
    e.preventDefault();
    const info = {
      senderNumber: e.target.agentNumber.value,
      reciverNumber: e.target.userNumber.value,
      amount: parseFloat(e.target.amount.value),
      type: "cash-in",
      status: "pending",
    };
    axiosSecure
      .post("/cash-in", info)
      .then((res) => {
        if (res.data.status == 301) {
          return toast.error("Please give a valid agent Number");
        } else if (res.data.status == 304) {
          return toast.error("Blocked user can't make any transaction");
        } else if (res.data.status == 305) {
          return toast.error("Non Approved user can't make any transaction");
        } else {
          toast.success("Request sent to the agent");
          e.target.reset();
        }
      })
      .catch((err) => toast.error(err.messages));
  };
  return (
    <div>
      <form
        onSubmit={handleCashIn}
        className="flex flex-col items-center gap-5 py-10"
      >
        <h1 className="text-2xl font-bold">Cash In</h1>
        <div className="flex items-center text-error relative">
          <CiPhone className="text-2xl absolute -left-7" />
          <input
            type="text"
            placeholder="Agent"
            className="border-b-2 px-3 py-2 border-error outline-none"
            name="agentNumber"
          />
        </div>
        <div className="flex items-center text-error relative">
          <CiPhone className="text-2xl absolute -left-7" />
          <input
            type="text"
            placeholder="Your Phone"
            className="border-b-2 px-3 py-2 border-error outline-none"
            name="userNumber"
            defaultValue={user?.phone}
            readOnly
          />
        </div>
        <div className="flex items-center text-error relative">
          <FaBangladeshiTakaSign className="text-2xl absolute -left-7" />
          <input
            type="number"
            placeholder="Enter Amount"
            className="border-b-2 px-3 py-2 border-error outline-none "
            name="amount"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline btn-wide  btn-md btn-error rounded-full hover:text-white"
        >
          Cash In
        </button>
      </form>
    </div>
  );
}

export default CashIn;
