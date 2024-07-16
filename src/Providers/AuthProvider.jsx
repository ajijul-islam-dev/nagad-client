import React, { createContext, useEffect, useState } from "react";
import useAxios from "../components/Hooks/useAxios/useAxios";
export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const { axiosSecure } = useAxios();
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    axiosSecure.get("/user")
    .then((res)=>{
      // console.log(res.data.user)
      setUser(res.data.user)
      setLoading(false)
    })
  });
  const authInfo = {user,loading};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
