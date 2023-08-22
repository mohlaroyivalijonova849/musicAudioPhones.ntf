import React from "react";
import Headphones from "../pages/headphones/Headphones";
import { Outlet } from "react-router-dom";

function HeadphonesLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default HeadphonesLayout;
