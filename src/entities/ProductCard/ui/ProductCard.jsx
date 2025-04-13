import Box from "./Box";
import {classNames} from '@/shared/lib/classNames/classNames'

import cls from "./ProductCard.module.css";

const ProductCard = ({ location, num, title, className, children }) => {
  return (
    <li className={classNames(cls.card, [className])}>
      <Box location={location} num={num} />
      <h5 className={cls.title}>{title}</h5>
      <p className={cls.text}>{children}</p>
    </li>
  );
};

export default ProductCard;
