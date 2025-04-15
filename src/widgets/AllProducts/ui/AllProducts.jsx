import React from "react";
import Container from "@/shared/ui/Container/Container";
import Title from "@/shared/ui/Title/Title";
import { ProductsTable, Search, Filter } from "@/features/ProductsTable";

import cls from "./AllProducts.module.css";

const AllProducts = () => {
  return (
    <section className={cls.products}>
      <Container>
        <div className={cls.top}>
          <Title title="КАТАЛОГ" italic="ПРОДУКЦИИ" center={false} />
          <form className={cls.form}>
            <Filter />
            <Search />
          </form>
        </div>
        <ProductsTable />
      </Container>
    </section>
  );
};

export default AllProducts;
