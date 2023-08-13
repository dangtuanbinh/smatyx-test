import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./style.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckActiveMenu = (menu: string) => {
    switch (menu) {
      case "main":
        return location.pathname === "/";
      case "auth":
        return location.pathname === "/auth";
      default:
        return false;
    }
  };
  return (
    <div className="header">
      <div
        onClick={() => navigate("/")}
        className={`header-menu-logo ${
          handleCheckActiveMenu("main") ? "active" : ""
        }`}
      ></div>
      <div className="header-menu-group">
        <div
          color="inherit"
          onClick={() => navigate("/auth")}
          className={`header-menu-item ${
            handleCheckActiveMenu("auth") ? "active" : ""
          }`}
        >
          Login/ Register
          {handleCheckActiveMenu("auth") && <div className="underline"></div>}
        </div>
      </div>
    </div>
  );
};
export default Header;
