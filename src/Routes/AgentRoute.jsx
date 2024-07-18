import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

function AgentRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }
  const token = localStorage.getItem("token")
  if (user && user.role.name === "agent" && user.role.status === "approved" && token) {
    return children;
  }

  return <Navigate to="/sign-in"/>
}

export default AgentRoute;
