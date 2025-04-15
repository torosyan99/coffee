import React from "react";

import cls from './ProductsTableItem.module.css'


const ProductsTableItem = () => {
  return (
    <tr className={cls.item}>
      <td>Vietnam Robusta Grade 1 clean screen</td>
      <td>В наличии на всех складах</td>
      <td>18</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>8,2 $</td>
    </tr>
  );
};

export default ProductsTableItem;
