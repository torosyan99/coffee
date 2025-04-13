import React from "react";
import Navigation from "./Navigation";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Header.module.css";

import telegram from "@/shared/assets/telegram.png";
import whatsapp from "@/shared/assets/whatsapp.png";

const Menu = ({ activeMenu }) => {
  return (
    <div className={classNames(cls.menu, [], { [cls.active]: activeMenu })}>
      <Navigation />
      <button className={cls.button}>Связаться</button>
      <div className={cls.contacts}>
        <a className={cls.phone}>
          тел. <span>+7 (925) 127-70-12</span>
        </a>
        <div className={cls.socials}>
          <a className={cls.social_link} href="#">
            <img src={telegram} alt="telegram" />
          </a>
          <a className={cls.social_link} href="#">
            <img src={whatsapp} alt="whats-app" />
          </a>
        </div>
      </div>
      <p className={cls.text}>
        &copy; Размещенная на сайте информация не является публичной офертой и носит
        информационный характер. Авторские права на размещенные материалы
        принадлежат ООО «КОФЕКСИМ», использование которых третьими лицами
        допускается только с письменного согласия правообладателя.
      </p>
    </div>
  );
};

export default Menu;
