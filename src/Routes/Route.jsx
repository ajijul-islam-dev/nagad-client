import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Root/Main";

import Home from "../components/Pages/Home/Home";
import SignIn from "../components/Pages/SignIn/SignIn";
import Register from "../components/Pages/Register/Register";
import CashIn from "../components/Pages/CashIn/CashIn";
import CashOut from "../components/Pages/CashOut/CashOut";
import SendMoney from "../components/Pages/SendMoney/SendMoney";
import Transaction from "../components/Pages/Transaction/Transaction";
import ManageUsers from "../components/Pages/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import ManageTranscation from "../components/Pages/ManageTranscation/ManageTranscation";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
            path : "/",
            element : <PrivateRoute><Home/></PrivateRoute>
        },
        {
            path : "/sign-in",
            element : <SignIn/>
        },
        {
            path : "/register",
            element : <Register/>
        },
        {
            path : "/cash-in",
            element : <CashIn/>
        },
        {
            path : "/cash-out",
            element : <CashOut/>
        },
        {
            path : "/send-money",
            element : <SendMoney/>
        },
        {
            path : "/transaction",
            element : <Transaction/>
        },
        {
            path : "/manage-users",
            element : <ManageUsers/>
        },
        {
            path : "/manage-transaction",
            element : <ManageTranscation/>
        }
      ]
    },
  ]);
  
  export default router