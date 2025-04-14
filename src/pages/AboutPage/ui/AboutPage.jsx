import React from "react";
import { Catalog } from "@/widgets/Catalog";
import { FlexSection } from "@/widgets/FlexSection";
import { AboutPageTop } from "@/widgets/AboutPageTop";
import { AboutTwo } from "@/widgets/AboutTwo";

const AboutPage = () => {
  return (
    <>
      <AboutPageTop />
      <AboutTwo />
      <Catalog />
      <FlexSection />
    </>
  );
};

export default AboutPage;
