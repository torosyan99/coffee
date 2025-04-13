import React from "react";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import { NewsCard } from "@/entities/NewsCard";

import cls from "./NewsBlock.module.css";

const NewsBlock = () => {
  return (
    <div className={cls.block}>
      <ValueBrackets>Сортировать</ValueBrackets>
      <ul className={cls.list}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
    </div>
  );
};

export default NewsBlock;
