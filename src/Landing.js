import React from "react";
import { productsData } from "./data";
import Product from "./Product";

const Landing = () => {
  const product = productsData.reduce((prevProd, prod) =>
    prod.rating.count > prevProd.rating.count ? prod : prevProd
  );
  return (
    <div className="py-8">
      <h1 className="text-center text-5xl font-bold">Most popular product</h1>
      <div className="flex justify-center mt-10">
        <Product product={product} />
      </div>
    </div>
  );
};

export default Landing;
