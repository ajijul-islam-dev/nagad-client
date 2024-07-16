import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Root/Main";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import CashIn from "../components/CashIn/CashIn";
import CashOut from "../components/CashOut/CashOut";
import SendMoney from "../components/SendMoney/SendMoney";
import Transaction from "../components/Transaction/Transaction";

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
      ]
    },
  ]);
  
  export default router