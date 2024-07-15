import React from "react";
import { CiPhone, CiUnlock } from "react-icons/ci";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="">
      <div className="text-center flex items-center justify-center flex-col gap-4 mt-16 w-[70%] mx-auto">
        <img src="/assets/images/logo.png" alt="" />
        <h4 className="text-lg font-semibold">Welcome</h4>
      </div>
      <div className="mt-16 mb-32">
        <form className="flex flex-col items-center gap-5 w-full">
          <div className="flex items-center text-error relative w-full">
            <CiPhone className="text-2xl absolute -left-7" />
            <input
              type="text"
              placeholder="Phone or Email"
              className="border-b-2 px-3 py-2 border-error outline-none w-full"
            />
          </div>
          <div className="flex items-center text-error relative w-full">
            <CiUnlock className="text-2xl absolute -left-7" />
            <input
              type="text"
              placeholder="Phone or Email"
              className="border-b-2 px-3 py-2 border-error outline-none w-full"
            />
          </div>

          <button className="btn btn-outline btn-wide px-40 btn-md btn-error rounded-full hover:text-white">
            Login
          </button>
          <div className="text-center">
            <p className="text-error font-thin">Not registered yet ?</p>
            <Link to="/Register" className="text-error font-semibold">Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
