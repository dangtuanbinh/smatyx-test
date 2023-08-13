import { useNavigate, useLocation } from "react-router-dom";
import "./style.scss";

const classNamePrefix = "header"

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    const localData = localStorage.getItem("is-login")

    if(localData) localStorage.clear()
    navigate("/auth")
  }

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__title`}>{location.pathname === "/" ? "Main" : location.pathname.substring(1)}</div>
      <div className={`${classNamePrefix}__logout`} onClick={handleLogout}>
        <span>Logout</span>
      </div>
    </div>
  );
};
export default Header;
