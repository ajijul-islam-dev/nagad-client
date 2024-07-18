import React, { useContext } from "react";
import { GrTransaction, GrUserManager } from "react-icons/gr";
import { MdHome } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

function Navigation() {
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="btm-nav border">
        <button className={`text-error ${pathname === "/" && "active"}`}>
          <Link to="/" className="flex items-center flex-col gap-1">
            <MdHome className="text-3xl" />
            Home
          </Link>
        </button>
        {user?.role?.name === "admin" && user?.role?.status === "approved" && (
          <button
            className={`text-error ${pathname === "/manage-users" && "active"}`}
          >
            <Link
              to="/manage-users"
              className="flex items-center flex-col gap-1"
            >
              <GrUserManager className="text-3xl" />
              Manage Users
            </Link>
          </button>
        )}
        {user?.role?.name === "agent" && user?.role?.status === "approved" && (
          <button
            className={`text-error ${pathname === "/manage-Transaction" && "active"}`}
          >
            <Link
              to="/manage-Transaction"
              className="flex items-center flex-col gap-1"
            >
              <GrUserManager className="text-3xl" />
              Manage Transaction
            </Link>
          </button>
        )}
        <button
          className={`text-error ${pathname === "/transaction" && "active"}`}
        >
          <Link to="/transaction" className="flex items-center flex-col gap-1">
            <GrTransaction className="text-3xl" />
            Transaction History
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
