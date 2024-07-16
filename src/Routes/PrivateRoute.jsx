import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user) {
    return <div>{children}</div>;
  }
  navigate("/sign-in");
}

export default PrivateRoute;
