import Home from "../pages/Home";
import Login from "../pages/Login";

export let enrutador = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
];
