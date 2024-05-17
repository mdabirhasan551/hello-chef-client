import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../shared/Navigation";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
