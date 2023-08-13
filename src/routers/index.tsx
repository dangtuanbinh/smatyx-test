import Login from "../pages/Login";
import Main from "../pages/Main";
import UserRegister from "../pages/Login/Register";

export const PrivateRoutes = [
  {
    path: "",
    element: <Main />,
  },
];

export const PublicRoutes = [
  {
    path: "register",
    element: <UserRegister />,
  },
  {
    path: "",
    element: <Login />,
  },
];
