import { Link } from "react-router-dom";

import cls from "./Header.module.css";

import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img className={cls.logo_img} alt="logo" src={logo} />
    </Link>
  );
};

export default Logo;
