import React, { useContext, useEffect } from "react";
import { CiPhone, CiUnlock } from "react-icons/ci";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios/useAxios";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";

function SignIn() {
  const navigate = useNavigate();

  const { axiosSecure, axiosPublic } = useAxios();
  const { user, setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const userInfo = {
      phone: e.target.phone.value,
      pin: e.target.pin.value,
    };



    axiosPublic
      .post("/login", userInfo)
      .then((res) => {
        console.log(res)

        if (res.data.token) {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          setUser(res.data.user);
          toast.success("logged In")
        }
        else{
          toast.error("Failed")

        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.message)
      });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center flex items-center justify-center flex-col gap-4 mt-16 w-[70%] mx-auto">
        <img src="/assets/images/logo.png" alt="" />
        <h4 className="text-lg font-semibold">Welcome</h4>
      </div>
      <div className="mt-16 mb-32">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-5 w-[75%] mx-auto md:w-full"
        >
          <div className="flex items-center text-error relative w-full">
            <CiPhone className="text-2xl absolute -left-7" />
            <input
              type="text"
              placeholder="Phone or Email"
              className="border-b-2 px-3 py-2 border-error outline-none w-full"
              name="phone"
            />
          </div>
          <div className="flex items-center text-error relative w-full">
            <CiUnlock className="text-2xl absolute -left-7" />
            <input
              type="pin"
              placeholder="Enter You 5 digit pin"
              className="border-b-2 px-3 py-2 border-error outline-none w-full"
              name="pin"
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline md:btn-wide px-20 md:px-40 btn-md btn-error rounded-full hover:text-white"
          >
            Login
          </button>
          <div className="text-center">
            <p className="text-error font-thin">Not registered yet ?</p>
            <Link to="/Register" className="text-error font-semibold">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
