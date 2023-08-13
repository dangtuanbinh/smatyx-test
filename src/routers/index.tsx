import Register from "src/pages/Register";
import Login from "../pages/Login";
import Timetable from "src/pages/Timetable";

export const PrivateRoutes = [
  {
    path: "",
    element: <Timetable />,
  },
];

export const PublicRoutes = [
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
];
