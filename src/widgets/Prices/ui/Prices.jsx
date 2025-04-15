import React from "react";
import Container from "@/shared/ui/Container/Container";
import { Marquee } from "@/features/Marquee";

import cls from "./Prices.module.css";

const Prices = () => {
  return (
    <section className={cls.prices}>
      <Marquee />
      <Container className={cls.inner}></Container>
    </section>
  );
};

export default Prices;
