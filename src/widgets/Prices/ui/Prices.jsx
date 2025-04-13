import React from "react";
import Box from "./Box";
import Container from "@/shared/ui/Container/Container";

import cls from "./Prices.module.css";

const Prices = () => {
  return (
    <section className={cls.prices}>
      <Container className={cls.inner}>
        <Box />
      </Container>
    </section>
  );
}


export default Prices;
