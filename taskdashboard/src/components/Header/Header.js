import React from "react";
import "./index.css";
import Logo from "../../assets/Header/lOGO.png";
import CheckedIn from "../../assets/Header/Checkin.png";
import Verify from "../../assets/Header/Verify.png";
import Notification from "../../assets/Header/Notification.png";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const routeData = [
    {
      routeName: "Dashboard",
      path: "",
    },
    {
      routeName: "Patients",
      path: "",
    },
    {
      routeName: "Human Resources",
      path: "",
    },
    {
      routeName: "Clinical",
      path: "/",
    },
    {
      routeName: "Compliance",
      path: "",
    },
    {
      routeName: "Billing",
      path: "",
    },
    {
      routeName: "Reports",
      path: "",
    },
  ];
  return (
    <div className="header_container">
      <div className="header_logo">
        <img alt="logoimage" src={Logo} className="header_logo-image" />
      </div>
      <div className="header_routes">
        {routeData.map((eachValue, i) => (
          <div key={i} className={`${location?.pathname ===eachValue?.path?"header_routes-activelist":"header_routes-list"}`}>
            {eachValue?.routeName}
          </div>
        ))}
      </div>
      <div className="header_account">
        <button className="header_check-button">
          <img alt="clockedin" src={CheckedIn} />
          Clocked-in
        </button>
        <div>
          <img alt="verify" src={Verify} />
        </div>
        <div>
          <img alt="Notification" src={Notification} />
        </div>
        <div className="header_account-icon">MA</div>
        <div className="header_account-text">Account</div>
      </div>
    </div>
  );
};

export default Header;
