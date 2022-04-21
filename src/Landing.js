import React from "react";
import { productsData } from "./data";
import Product from "./Product";

const Landing = () => {
  const mostPopularProduct = productsData.reduce((prevProd, prod) =>
    prod.rating.count > prevProd.rating.count ? prod : prevProd
  );

  const mostLikedProduct = productsData.reduce((prevProd, prod) =>
    prod.rating.rate > prevProd.rating.rate ? prod : prevProd
  );
  return (
    <div className="flex flex-row justify-center py-8">
      <div className="mr-8">
        <h1 className="text-center text-4xl font-bold">Most popular</h1>
        <div className="flex justify-center mt-4">
          <Product product={mostPopularProduct} loaded={true} />
        </div>
      </div>
      <div className="ml-8">
        <h1 className="text-center text-4xl font-bold">Most liked</h1>
        <div className="flex justify-center mt-4">
          <Product product={mostLikedProduct} loaded={true} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
