import React from "react";
import { Prices } from "@/widgets/Prices";
import { FlexSection } from "@/widgets/FlexSection";
import { Contacts } from "@/entities/Contacts";

import cls from "./contactsPage.module.css";

const ContactsPage = () => {
  return (
    <>
      <FlexSection className={cls.section}>
        <Contacts />
      </FlexSection>
      <Prices />
    </>
  );
};

export default ContactsPage;
