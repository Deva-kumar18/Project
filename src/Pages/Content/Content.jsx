import React from "react";
import Home from "../Home/Home";
import ProfessionalBranding from "../ProfessionalBranding/ProfessionalBranding";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="content-container">
      <Outlet/>
    </div>
  );
};

export default Content;
