import axios from 'axios'

function useAxios() {
    
  const axiosSecure = axios.create({
    baseURL : import.meta.env.VITE_SERVER_URL
  })
  const axiosPublic = axios.create({
    baseURL : import.meta.env.VITE_SERVER_URL
  })

  axiosSecure.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.token = token;
    return config
  })

  return {axiosSecure,axiosPublic}

}

export default useAxios