import React from "react";
import { FlexSection } from "@/widgets/FlexSection";
import { Prices } from "@/widgets/Prices";

const PricesPage = () => {
  fetch("api/futures").then((r) => console.log(r));
  return (
    <>
      <Prices />
      <FlexSection />
    </>
  );
};

export default PricesPage;
