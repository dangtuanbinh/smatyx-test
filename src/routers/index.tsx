import Login from "../pages/Login";
import Main from "../pages/Main";
import Timetable from "src/pages/Timetable";

export const PrivateRoutes = [
  {
    path: "",
    element: <Main />,
  },
  {
    path: "/timetable",
    element: <Timetable />
  },
  {
    path: "/user",
    element: <Timetable />
  },
  {
    path: "/settings",
    element: <Timetable />
  }
];

export const PublicRoutes = [
  {
    path: "",
    element: <Login />,
  },
];
