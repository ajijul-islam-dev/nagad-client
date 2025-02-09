import React, { createContext, useEffect, useState } from "react";
import useAxios from "../components/Hooks/useAxios/useAxios";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const { axiosSecure } = useAxios();
  const [loading,setLoading] = useState(true);


  useEffect(() => {
    axiosSecure.get("/user")
    .then((res)=>{
      setUser(res.data.user)
      setLoading(false)
    })
    .catch(err => {
      
      setLoading(false)
      toast.error(err.meaage)
    })

    if(!user){
      localStorage.clear();
    }

  });




  const authInfo = {user,setUser,loading};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
