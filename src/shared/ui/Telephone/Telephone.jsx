import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Telephone.module.css";

const Telephone = ({className}) => {
  return (
    <a className={classNames(cls.telephone, [className])} href="tel:+79251277012">
      тел. <span> +7 (925) 127-70-12</span>
    </a>
  );
};

export default Telephone;
