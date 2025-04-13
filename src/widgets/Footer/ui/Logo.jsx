import React from "react";
import { Link } from "react-router-dom";

import cls from "./Footer.module.css";

import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link className={cls.logo} to={'/'}>
      <img className={cls.logo_img} src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
