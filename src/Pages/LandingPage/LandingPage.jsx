import React from "react";
import Category from "../../Components/Category/Category";
import CarousleEffect from "../../Components/Carousle/CarousleEffect";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/Layout/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <CarousleEffect />
      <Category />
      <Product />
    </Layout>
  );
};

export default LandingPage;
