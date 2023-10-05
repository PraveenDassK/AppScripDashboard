import React from "react";
import "./index.css";
import UserImage from "../../assets/Tasks/UserProfile.png";
const UserCard = ({ name, appoinment, taskId, date, duration, status }) => {
  return (
    <div className='card_container'>
      <div className='card_leftSide'>
        <img
          src={UserImage}
          alt='profileImage'
          style={{ height: "100px", width: "100px" }}
        />
        <div>
          <div className='card_username'>{name}</div>
          <span className='card_appoinmentId'>
            Appointment Id.: {appoinment}
          </span>
          <div className='card_inTake'>Intake Comprehensive Assessment</div>
        </div>
      </div>
      <div className='card_centerSide'>
        <div className='card_center-value'>
          <div className='card_taskId'>Task Id:</div>
          <div className='card_taskIdDetails'>{taskId}</div>
        </div>
        <div className='card_center-value'>
          <div className='card_taskId'>
            Completed on:
            {/* <span className='card_taskIdDetails'>{213232323}</span> */}
          </div>
          <div className='card_taskIdDetails'>{date}</div>
        </div>
        <div className='card_center-value'>
          <div className='card_taskId'>Duration:</div>
          <div className='card_taskIdDetails'>{duration}</div>
        </div>
      </div>
      <div className='card_rightSide'>
        {status !== "Completed" ? (
          <span className='card_status'>
            Status
            <span
              className={`${
                status === "Overdue" ? "card_status-live" : "card_status-green"
              }`}>
              {status}
            </span>
          </span>
        ) : null}
        {status === "Overdue" && (
          <button className='card_button'>Start Assessment</button>
        )}
        {status === "Upcoming" && (
          <button className='card_button'>Continue Assessment</button>
        )}
        {status === "Completed" && (
          <button className='card_button view_button'>View Assessment</button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
