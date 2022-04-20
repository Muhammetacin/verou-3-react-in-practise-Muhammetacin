import React, { useState } from "react";
import { Box, Image, Badge, StarIcon } from "@chakra-ui/react";

const Products = () => {
  const [product, setProduct] = useState([{}, false]);
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then(
      (json) => console.log(json)
      //   setProduct([
      //     {
      //       product: json,
      //       productLoaded: true,
      //     },
      //   ])
    );

  return (
    <div className="flex justify-center py-4">
      <h1 className="text-4xl font-bold">Products</h1>
      {/* <div>
        <Box w="50%" m="4" p="4" bg="tomato" color="white">
          This is test product
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt="dummy product" />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {product.beds} beds &bull; {product.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.title}
            </Box>

            <Box>
              {product.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            {/* <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < product.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </div> */}
    </div>
  );
};

export default Products;
