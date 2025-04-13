import Box from "./Box";

import cls from "./Top.module.css";

const Navigation = () => {
  return (
    <div className={cls.navigation}>
      <Box className={cls.opacity}>Каталог продукции</Box>
      <Box>Калькулятор цен</Box>
    </div>
  );
};

export default Navigation;
