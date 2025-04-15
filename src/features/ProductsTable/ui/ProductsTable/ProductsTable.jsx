import React, { useEffect } from "react";
import { ProductsTableItem } from "@/entities/ProductsTableItem";

import cls from "./ProductsTable.module.css";

const ProductsTable = () => {
  useEffect(() => {
    fetch("/api/news/").then((res) => res.json()).then(data => console.log(data));

  }, []);
  return (
    <table className={cls.table}>
      <thead>
        <tr>
          <th className={cls.top}>Наименование</th>
          <th className={cls.top}>Наличие </th>
          <th className={cls.top}>Скрин</th>
          <th className={cls.top}>Оценка</th>
          <th className={cls.top}>Обработка</th>
          <th className={cls.top}>Дескриптор</th>
          <th className={cls.top}>Цена</th>
        </tr>
      </thead>
      <tbody>
        <ProductsTableItem />
        <ProductsTableItem />
      </tbody>
    </table>
  );
};

export default ProductsTable;
