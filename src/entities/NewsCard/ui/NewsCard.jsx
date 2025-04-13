import React from "react";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import { Link } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./NewsCard.module.css";

import image from "../assets/image.png";

const NewsCard = ({ className }) => {
  return (
    <li className={classNames(cls.card, [className])}>
      <div className={cls.left}>
        <span className={cls.soon}>Cкоро!</span>
        <span className={cls.date}>21.04.2025</span>
      </div>
      <div className={cls.desc}>
        <p className={cls.desc_text}>Описание акции и новости</p>
        <Link className={cls.link} to={"#"}>
          <ValueBrackets>ПОДРОБНЕЕ </ValueBrackets>
        </Link>
      </div>
      <div className={cls.right}>
        <img className={cls.img} src={image} alt="image" />
      </div>
      <span className={classNames(cls.date,[cls.date_bottom])}>21.04.2025</span>
    </li>
  );
};

export default NewsCard;
