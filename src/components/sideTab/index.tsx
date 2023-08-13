import "./styles.scss";
import logo from "../../assets/images/logo.png";

const classNamePrefix = "side-tab";

const SideTab = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__header`}>
        <img src={logo} alt="" />
        <div className={`${classNamePrefix}__menu-list`}>
          <div className={`${classNamePrefix}__menu-item`}>Timetable</div>
        </div>
      </div>
      <div>
        <hr />
        <div className={`${classNamePrefix}__footer`}>
         
        </div>
      </div>
    </div>
  );
};

export default SideTab;
