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
import AgentRoute from "./AgentRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cash-in",
        element: (
          <PrivateRoute>
            <CashIn />
          </PrivateRoute>
        ),
      },
      {
        path: "/cash-out",
        element: (
          <PrivateRoute>
            <CashOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/send-money",
        element: (
          <PrivateRoute>
            <SendMoney />
          </PrivateRoute>
        ),
      },
      {
        path: "/transaction",
        element: (
          <PrivateRoute>
            {" "}
            <Transaction />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/manage-transaction",
        element: (
          <AgentRoute>
            <ManageTranscation />
          </AgentRoute>
        ),
      },
    ],
  },
]);

export default router;
