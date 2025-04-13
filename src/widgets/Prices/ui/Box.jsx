import React from "react";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";

import cls from "./Prices.module.css";

import coffee from "../assets/coffee.png";

const Box = () => {
  return (
    <div className={cls.box}>
      <div className={cls.wrapper}>
        <ValueBrackets>Стоимость</ValueBrackets>
        <p className={cls.text}>
          Рассчитайте стоимость кофе по актуальным ценам с помощью нашего
          калькулятора
        </p>
        <ButtonArrow className={cls.button} to="#" black={true}>
          Посмотреть цены
        </ButtonArrow>
      </div>

      <img className={cls.img} src={coffee} alt="coffee" />
    </div>
  );
};

export default Box;
