import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Root/Main";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Home/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/sign-in",
            element : <SignIn/>
        },
        {
            path : "/register",
            element : <Register/>
        }
      ]
    },
  ]);
  
  export default router