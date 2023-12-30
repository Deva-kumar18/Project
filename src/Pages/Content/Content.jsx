import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";



const Content = () => {
  const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
  if (location.pathname === '/') {
    navigate('/home');
  }
}, [location.pathname, navigate]);
  return (
    <div className="content-container">
      <Outlet/>
    </div>
  );
};

export default Content;
