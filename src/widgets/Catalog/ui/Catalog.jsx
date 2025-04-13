import React from "react";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import Title from "@/shared/ui/Title/Title";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import Container from "@/shared/ui/Container/Container";
import { Products } from "@/features/Products";

import cls from "./Catalog.module.css";

const Catalog = () => {
  return (
    <section className={cls.catalog}>
      <Container>
        <ValueBrackets className={cls.top}>Каталог</ValueBrackets>
        <Title title="КАТАЛОГ" italic="ПРОДУКЦИИ" mw={374}>
          От сортов арабики и робусты до уникальных сортов с особым вкусом — у
          нас вы найдёте именно тот кофе, который соответствует вашим
          предпочтениям.
        </Title>
        <Products />
        <ButtonArrow className={cls.button}>Перейти к каталогу</ButtonArrow>
      </Container>
    </section>
  );
};

export default Catalog;
