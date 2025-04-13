import React from "react";
import Navigation from "./Navigation";
import Socials from "./Socials";
import Telephone from "@/shared/ui/Telephone/Telephone";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Header.module.css";

const Menu = ({ activeMenu }) => {
  return (
    <div className={classNames(cls.menu, [], { [cls.active]: activeMenu })}>
      <Navigation />
      <button className={cls.button}>Связаться</button>
      <div className={cls.contacts}>
        <Telephone className={cls.telephone} />

        <Socials />
      </div>
      <p className={cls.text}>
        &copy; Размещенная на сайте информация не является публичной офертой и
        носит информационный характер. Авторские права на размещенные материалы
        принадлежат ООО «КОФЕКСИМ», использование которых третьими лицами
        допускается только с письменного согласия правообладателя.
      </p>
    </div>
  );
};

export default Menu;
