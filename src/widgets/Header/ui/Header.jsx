import React, { useState } from "react";
import Logo from "./Logo";
import Container from "@/shared/ui/Container/Container";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

import cls from "./Header.module.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClick = () => {
    setActiveMenu((b) => !b);
    document.querySelector('.app').classList.toggle("overflow");
  };
  return (
    <header className={cls.header}>
      <Container className={cls.inner}>
        <Logo />
        <Menu  activeMenu={activeMenu}/>
        <MenuButton onClick={handleClick} activeMenu={activeMenu} />
      </Container>
    </header>
  );
};

export default Header;
