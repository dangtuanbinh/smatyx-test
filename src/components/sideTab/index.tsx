import "./styles.scss";
import logo from "../../assets/images/logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const classNamePrefix = "side-tab";

const SideTab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabList = [
    {
      id: 1,
      title: "Timetable",
      path: "/timetable",
      onClick: () => {
        navigate("/timetable");
      },
    },
  ];

  return (
    <div className={classNamePrefix}>
      <div
        className={`${classNamePrefix}__header`}
        onClick={() => navigate("/")}
      >
        <div className={`${classNamePrefix}__logo`}>
          <img src={logo} alt="" />
          <div>Smatyx</div>
        </div>
        <div className={`${classNamePrefix}__menu-list`}>
          {tabList.map((t) => (
            <div
              className={`${classNamePrefix}__menu-item ${
                location.pathname === t.title ? "tab-active" : "tab-unactive"
              }`}
              key={t.id}
              onClick={() => navigate(t.path)}
            >
              <div className={`${classNamePrefix}__menu-item-title`}>
                <span> {t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr />
        <div className={`${classNamePrefix}__footer`}></div>
      </div>
    </div>
  );
};

export default SideTab;
