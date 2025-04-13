import ImageBlock from "./Image";
import Container from "@/shared/ui/Container/Container";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ContactForm } from "@/features/ContactForm";

import cls from "./FlexSection.module.css";

const FlexSection = ({ className, children }) => {
  return (
    <section className={classNames(cls.section, [className], {})}>
      <Container className={cls.inner}>
        {children ? children : <ImageBlock />}
        <ContactForm />
      </Container>
    </section>
  );
};

export default FlexSection;
