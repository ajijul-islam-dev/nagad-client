import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../Shared/PageBanner/PageBanner";

function Home() {
  return (
    <div>
      <PageBanner/>
      <div className="text-center mt-16">
        <div className="avatar">
          <div className="w-40 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h2 className="text-lg font-bold">Name : MD. Azizul Islam</h2>
        <h2 className="text-lg ">Phone : +880 1751859389</h2>
        <h2 className="text-lg ">Email : ajijulislamdev@gmail.com</h2>
      </div>
      <div className="m-10">
        <h1 className="text-xl font-semibold text-center my-10">Services</h1>
        <div className="flex items-center gap-5 justify-center">
          <Link to="/cash-in">
            <div className="relative">
              <img src="/assets/images/cash-bg.png" className="" />
              <img
                src="/assets/images/in.png"
                className="absolute inset-0 m-auto"
              />
            </div>
            <p className="text-center">Cash-in</p>
          </Link>
          <Link to="/cash-out">
            <div className="relative">
              <img src="/assets/images/cash-bg.png" className="" />
              <img
                src="/assets/images/out.png"
                className="absolute inset-0 m-auto"
              />
            </div>
            <p className="text-center">Cash-Out</p>
          </Link>
          <Link to="/send-money">
            <div className="relative">
              <img src="/assets/images/cash-bg.png" className="" />
              <img
                src="/assets/images/send.png"
                className="absolute inset-0 m-auto"
              />
            </div>
            <p className="text-center">Send Money</p>
          </Link>
          <Link to="/transaction">
            <div className="relative">
              <img src="/assets/images/cash-bg.png" className="" />
              <img
                src="/assets/images/in.png"
                className="absolute inset-0 m-auto"
              />
            </div>
            <p className="text-center">Transaction</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
