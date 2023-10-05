import React from "react";
import "./index.css";
import DownArrow from "../../assets/SideBar/DownArrow.png";
import Appoinment from "../../assets/SideBar/Timer.png";
import Tasks from "../../assets/SideBar/Tasks.png";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const sideBarData = [
    {
      title: "Appointments",
      imageUrl: Appoinment,
      pathName: "",
    },
    {
      title: "Tasks",
      imageUrl: Tasks,
      pathName: "/",
    },
  ];
  return (
    <div className='sideBar_container'>
      <div className='sideBar_title'>MedLife</div>
      <div style={{ margin: "15% 0%" }}>
        <button className='sideBar_appoinment'>
          Add Clinical <img src={DownArrow} alt='arrowicon' />
        </button>
      </div>
      <div>
        {sideBarData?.map((eachData, i) => {
          return (
            <div
              className={`${
                location?.pathname === eachData?.pathName
                  ? "sideBar_selector-active"
                  : "sideBar_selector"
              }`}
              key={i}>
              <img alt='selectedimage' src={eachData?.imageUrl} />
              <div>{eachData?.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
