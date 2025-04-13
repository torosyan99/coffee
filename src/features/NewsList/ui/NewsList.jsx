import React from "react";
import { NewsCard } from "@/entities/NewsCard";

import cls from "./NewsList.module.css";

const NewsBlock = () => {
  return (
    <ul className={cls.list}>
      <NewsCard />
      <NewsCard />
      <NewsCard className={cls.last} />
    </ul>
  );
};

export default NewsBlock;
