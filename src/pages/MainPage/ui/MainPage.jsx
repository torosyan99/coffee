import React from "react";
import { Top } from "@/widgets/Top";
import { About } from "@/widgets/About";
import { Catalog } from "@/widgets/Catalog";
import { Prices } from "@/widgets/Prices";
import { News } from "@/widgets/News";
import { FlexSection } from "@/widgets/FlexSection";

const MainPage = () => {
  return (
    <>
      <Top />
      <About />
      <Catalog />
      <Prices />
      <News />
      <FlexSection />
    </>
  );
};

export default MainPage;
