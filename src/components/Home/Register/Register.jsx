import React from "react";
import { CiPhone, CiUnlock } from "react-icons/ci";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="">
      <div className="text-center flex items-center justify-center flex-col gap-4 mt-16 w-[70%] mx-auto">
        <img src="/assets/images/logo.png" alt="" />
        <h4 className="text-lg font-semibold">Welcome</h4>
      </div>
      <div className="mt-10 mb-32">
        <form className="flex flex-col items-center gap-5">
          <div className="flex items-center text-error relative w-full">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="outline-none border-b-2 px-3 py-1 border-error outline-non w-full"
            />
          </div>
          <div className="flex items-center text-error relative w-full">
            <input
              type="number"
              placeholder="Phone Number"
              className="outline-none border-b-2 px-3 py-1 border-error outline-non w-full"
            />
          </div>
          <div className="flex items-center text-error relative w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none border-b-2 px-3 py-1 border-error outline-non w-full"
            />
          </div>
          <div className="flex items-center text-error relative w-full">
            <input
              type="text"
              placeholder="5 Digit Pin"
              className="outline-none border-b-2 px-3 py-1 border-error outline-non w-full"
            />
          </div>
            <div className="flex items-center gap-5">
            <input type="radio" name="role" className="radio radio-error" value="user" />User 
            <input type="radio" name="role" className="radio radio-error" value="admin" />Admin 
           <input type="radio" name="role" className="radio radio-error" value="agent" />Agent 
            </div>
          <button className="btn btn-outline px-20 btn-md btn-wide btn-error rounded-full hover:text-white">
            Register
          </button>
          <div className="text-center">
            <p className="text-error font-thin">Already Registered ?</p>
            <Link to="/sign-in" className="text-error font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
