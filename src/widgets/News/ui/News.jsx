import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import Title from "@/shared/ui/Title/Title";
import Container from "@/shared/ui/Container/Container";
import { NewsBlock } from "@/features/NewsBlock";

import cls from "./News.module.css";

const News = () => {
  return (
    <div className={cls.news}>
      <Container>
        <Title title="НОВОСТИ И АКЦИИ" />
        <NewsBlock />
        <ButtonArrow className={cls.button} to="#">
          Показать больше
        </ButtonArrow>
      </Container>
    </div>
  );
};

export default News;
