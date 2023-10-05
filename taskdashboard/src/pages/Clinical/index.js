import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./index.css";
import UserCard from "../../components/UserCard/UserCard";
import SearchAndFilter from "../../components/SearchAndFilter";
import { taskData } from "../../data/TaskData";
const Clinical = () => {
  const [selected, setSelected] = useState(0);
  //state for filtering task
  const [filterData, setFiteredData] = useState([]);
  console.log(taskData, "this is selected");
  useEffect(() => {
    loadData();
  }, []);

  //function to filter upcoming tasks
  const loadData = () => {
    setSelected(0);
    let newArray = [];
    newArray = taskData?.filter(
      (eachTask, i) => eachTask?.status !== "Completed"
    );
    setFiteredData(newArray);
  };

  const handleCompleted = () => {
    setSelected(1);

    let newArray = [];
    newArray = taskData?.filter(
      (eachTask, i) => eachTask?.status === "Completed"
    );
    setFiteredData(newArray);
  };

  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
        <div className='clinic_tab-conatiner'>
          <div className='clinic_tab-title'>Tasks</div>
          <div className='clinic-tab-subTitle'>{`Clinical > Tasks`}</div>
          <div className='clinic_tab-selector'>
            <div
              className={`${
                selected === 0
                  ? "clinic_selected-tab"
                  : "clinic_not-selected-tab"
              }`}
              onClick={loadData}>
              Upcoming Tasks
            </div>
            <div
              className={`${
                selected === 1
                  ? "clinic_selected-tab"
                  : "clinic_not-selected-tab"
              }`}
              onClick={handleCompleted}>
              Completed Tasks
            </div>
          </div>
        </div>
        <div style={{ width: "95%", marginLeft: "2%" }}>
          <div className='clinic_card-container'>
            <SearchAndFilter />
            {filterData?.map((eachTask, index) => {
              return (
                <div key={index}>
                  {selected === 0 ? (
                    <div className='Clinic_Notification'>
                      {eachTask?.NotificationData}
                    </div>
                  ) : null}
                  <UserCard
                    name={eachTask?.name}
                    appoinment={eachTask?.appointmentId}
                    taskId={eachTask?.taskId}
                    date={eachTask?.date}
                    duration={eachTask?.duration}
                    status={eachTask?.status}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clinical;
