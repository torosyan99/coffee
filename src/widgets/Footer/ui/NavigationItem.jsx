import React from "react";

import cls from "./Footer.module.css";
import { Link } from "react-router-dom";

const NavigationItem = ({ name, num, links, pageLinks }) => {
  return (
    <div className={cls.item}>
      <div className={cls.name}>
        {name}
        <span className={cls.name_num}>
          <span>{"{"}</span>
          {num}
          <span>{"}"}</span>
        </span>
      </div>
      <div className={cls.links}>
        {links.map(({ path, value }) => {
          if (pageLinks)
            return (
              <Link className={cls.link} key={path} to={path}>
                {value}
              </Link>
            );
          return (
            <a className={cls.link} key={path} href={path}>
              {value}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationItem;
