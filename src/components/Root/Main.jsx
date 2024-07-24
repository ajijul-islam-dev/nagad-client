import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  return (
    <div>
      <main className="">
        <Outlet />
      </main>
      <nav className="">
        <Navigation />
      </nav>
      <ToastContainer/>
    </div>
  );
}

export default Main;
