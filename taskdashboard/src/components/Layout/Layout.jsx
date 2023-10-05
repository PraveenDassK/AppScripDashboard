import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
