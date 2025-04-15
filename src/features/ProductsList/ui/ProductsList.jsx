import React from "react";
import { ProductsCard } from "@/entities/ProductsCard";

import cls from "./ProductsList.module.css";

const ProductsList = () => {
  return (
    <ul className={cls.list}>
      <ProductsCard
        num="1"
        location={"Бразилия"}
        title="Vietnam Robusta Grade 1 clean screen"
      >
        Высококачественный кофе сорта робуста, выращенный во Вьетнаме. "Grade 1"
        означает, что это кофе высшего класса, который отличается отсутствием
        дефектов.
      </ProductsCard>
      <ProductsCard
        num="2"
        location={"Вьетнам"}
        title="Brazil Arabic FC NY 2 screen"
      >
        Кофе арабика высшего качества, родом из Бразилии. Сорт FC (Fine Cup)
        обозначает, что зерна прошли строгий отбор и имеют отличное качество.
      </ProductsCard>
      <ProductsCard
        num="3"
        location={"Страна-производитель"}
        title="Скоро в продаже"
        className={cls.last}
      >
        Наша цель — сделать каждый глоток кофе настоящим удовольствием,
        предоставляя нашим клиентам только лучший продукт.
      </ProductsCard>
    </ul>
  );
};

export default ProductsList;
