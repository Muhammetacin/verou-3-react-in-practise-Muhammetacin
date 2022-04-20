import React, { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="py-4">
      <h1 className="text-center text-5xl font-bold mt-4">Products</h1>
      <div className="grid grid-cols-4 gap-2 my-8 mx-32">
        {products.map((prod) => (
          <Product key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;
