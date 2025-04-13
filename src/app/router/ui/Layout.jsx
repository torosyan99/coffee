import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
