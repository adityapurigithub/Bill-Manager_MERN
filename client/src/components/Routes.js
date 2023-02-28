import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, Login, Register } from "./";
import CheckAuth from "./utils/CheckAuth";
import Guest from "./utils/Guest";

//checking if user exists in cookies...

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <CheckAuth>
            <Home />
          </CheckAuth>
        ),
      },
      {
        path: "/login",
        element: (
          <Guest>
            <Login />
          </Guest>
        ),
      },
      {
        path: "/register",
        element: (
          <Guest>
            <Register />
          </Guest>
        ),
      },
    ],
  },
]);
export default router;
