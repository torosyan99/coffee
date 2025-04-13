import React from "react";
import { CatalogCard } from "@/entities/CatalogCard";

import cls from "./CatalogList.module.css";

const CatalogList = () => {
  return (
    <ul className={cls.list}>
      <CatalogCard
        num="1"
        location={"Бразилия"}
        title="Vietnam Robusta Grade 1 clean screen"
      >
        Высококачественный кофе сорта робуста, выращенный во Вьетнаме. "Grade 1"
        означает, что это кофе высшего класса, который отличается отсутствием
        дефектов.
      </CatalogCard>
      <CatalogCard
        num="2"
        location={"Вьетнам"}
        title="Brazil Arabic FC NY 2 screen"
      >
        Кофе арабика высшего качества, родом из Бразилии. Сорт FC (Fine Cup)
        обозначает, что зерна прошли строгий отбор и имеют отличное качество.
      </CatalogCard>
      <CatalogCard
        num="3"
        location={"Страна-производитель"}
        title="Скоро в продаже"
        className={cls.last}
      >
        Наша цель — сделать каждый глоток кофе настоящим удовольствием,
        предоставляя нашим клиентам только лучший продукт.
      </CatalogCard>
    </ul>
  );
};

export default CatalogList;
