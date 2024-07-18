import React, { useContext } from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Modal from "../../Modal/Modal";
import { AuthContext } from "../../../Providers/AuthProvider";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div className="mb-32">
      <PageBanner />
      <Modal />
      <div className="text-center mt-16">
        <div className="">
          <img className="block mx-auto" src="/assets/images/logo.png" />
        </div>

        <h2 className="text-lg font-bold">Name : {user?.name}</h2>
        <h2 className="text-lg ">Phone : {user?.phone}</h2>
        <h2 className="text-lg ">Email : {user?.email}</h2>
        <h1 className="text-xl font-semibold">Balance : {user?.balance} TK</h1>
        <div className="flex justify-center gap-2 items-center my-2">
          <div className="border px-2 py-2">Role : {user?.role?.name}</div>
          <div className="border px-2 py-2">Status : {user?.role?.status}</div>
        </div>
        <button onClick={()=> localStorage.clear()} className="btn btn-error mt-2">Log out</button>
      </div>
      <div className="m-10">
        <h1 className="text-xl font-semibold text-center my-10">Services</h1>
        <div className="flex items-center gap-5 justify-center">
          <button
            onClick={() => document.getElementById("cash_in").showModal()}
          >
            <div className="relative">
              <img src="/assets/images/cash-bg.png" className="" />
              <img
                src="/assets/images/in.png"
                className="absolute inset-0 m-auto"
              />
            </div>
            <p className="text-center">Cash-in</p>
          </button>
          <button
            onClick={() => document.getElementById("cash_out").showModal()}
          >
            <div className="relative">
              <img src="/assets/images/cash-bg.png" className="" />
              <img
                src="/assets/images/out.png"
                className="absolute inset-0 m-auto"
              />
            </div>
            <p className="text-center">Cash-Out</p>
          </button>
          <button
            onClick={() => document.getElementById("send_money").showModal()}
          >
            <div className="relative">
              <img src="/assets/images/cash-bg.png" className="" />
              <img
                src="/assets/images/send.png"
                className="absolute inset-0 m-auto"
              />
            </div>
            <p className="text-center">Send Money</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
