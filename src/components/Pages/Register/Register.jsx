import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios/useAxios";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const { axiosSecure, axiosPublic } = useAxios();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const userInfo = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      pin: e.target.password.value,
      role: { name: e.target.role.value, status: "pending" },
      balance: 0,
    };

    if(!typeof(userInfo.pin) == "number"){
      return toast.error("Pin Must be Numbers Only")
    }else if(userInfo.pin.length <5 && userInfo.pin.length >5){
      return toast.error("Pin Must be within 5 charecter")
    }

    axiosPublic
      .post("/sign-up", userInfo)
      .then((res) => {
        if (res.data.status == 301) {
          return toast.warning("Account Already Exist");
        }

        toast.success("Account created Successfully");
        navigate("/sign-in");
        toast.success("Account created Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center flex items-center justify-center flex-col gap-4 mt-16 w-[70%] mx-auto">
        <img src="/assets/images/logo.png" alt="" />
        <h4 className="text-lg font-semibold">Welcome</h4>
      </div>
      <div className="mt-10 mb-32">
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center gap-5 w-[75%] mx-auto md:w-full"
        >
          <div className="flex items-center text-error relative w-full">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="outline-none border-b-2 px-3 py-1 border-error outline-non w-full"
              name="name"
            />
          </div>
          <div className="flex items-center text-error relative w-full">
            <input
              type="number"
              placeholder="Phone Number"
              className="outline-none border-b-2 px-3 py-1 border-error outline-non w-full"
              name="phone"
            />
          </div>
          <div className="flex items-center text-error relative w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none border-b-2 px-3 py-1 border-error outline-non w-full"
              name="email"
            />
          </div>
          <div className="flex items-center text-error relative w-full">
            <input
              type="text"
              placeholder="5 Digit Pin"
              className="outline-none border-b-2 px-3 py-1 border-error outline-non w-full"
              name="password"
            />
          </div>
          <div className="flex items-center gap-2 md:gap-5">
            <input
              type="radio"
              name="role"
              className="radio radio-error"
              value="user"
            />
            User
            <input
              type="radio"
              name="role"
              className="radio radio-error"
              value="admin"
            />
            Admin
            <input
              type="radio"
              name="role"
              className="radio radio-error"
              value="agent"
            />
            Agent
          </div>
          <button
            type="submit"
            className="btn btn-outline px-20 btn-md md:btn-wide btn-error rounded-full hover:text-white"
          >
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
