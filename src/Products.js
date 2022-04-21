import React, { useState, useEffect } from "react";
import Product from "./Product";
import { RadioGroup, Radio, Stack, Button } from "@chakra-ui/react";
import { productsData } from "./data";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [value, setValue] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setProducts(data);
      });
    // setProducts(productsData);
  }, [value]);

  const setProductsFilter = () => {
    const filteredCategory = products.filter(
      (product) => product.category === value
    );
    console.log(filteredCategory);
    setProducts(filteredCategory);
  };

  return (
    <div className="py-4">
      <h1 className="text-center text-5xl font-bold mt-4">Products</h1>

      <RadioGroup
        onChange={setValue}
        value={value}
        className="container mx-auto flex justify-center mt-8"
      >
        <Stack direction="row">
          <Radio value="men's clothing">Men's clothing</Radio>
          <Radio value="women's clothing">Women's clothing</Radio>
          <Radio value="jewelery">Jewelery</Radio>
          <Radio value="electronics">Electronics</Radio>
          <Button colorScheme="blue" size="sm" onClick={setProductsFilter}>
            Filter
          </Button>
        </Stack>
      </RadioGroup>

      <div className="container grid grid-cols-4 my-8 mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product} loaded={isLoaded} />
        ))}
      </div>
    </div>
  );
};

export default Products;
