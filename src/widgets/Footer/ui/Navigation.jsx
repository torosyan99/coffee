import React from "react";
import NavigationItem from "./NavigationItem";
import { pageLinksConfig } from "../config/pageLinksConfig";
import { linksConfig } from "../config/linksConfig";

import cls from "./Footer.module.css";

const Navigation = () => {
  return (
    <nav className={cls.navigation}>
      <NavigationItem
        name={"Меню"}
        num={"1"}
        links={pageLinksConfig}
        pageLinks={true}
      />
      <NavigationItem
        name={"Контакты"}
        num={"2"}
        links={linksConfig}
        pageLinks={true}
      />
    </nav>
  );
};

export default Navigation;
