import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./index.css";
const Clinical = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Layout>
      <div
        style={{ backgroundColor: "#f4f4f4", width: "100%", height: "100vh" }}>
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
              onClick={() => setSelected(0)}>
              Upcoming Tasks
            </div>
            <div
              className={`${
                selected === 1
                  ? "clinic_selected-tab"
                  : "clinic_not-selected-tab"
              }`}
              onClick={() => setSelected(1)}>
              Completed Tasks
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clinical;
