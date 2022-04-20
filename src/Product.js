import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Product = ({ product }) => {
  return (
    <div className="flex flex-grow-0 items-stretch mx-auto">
      {product ? (
        <Box w="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
          <Image
            boxSize="64"
            objectFit="contain"
            src={product.image}
            alt="dummy product"
            p="4"
            m="auto"
          />

          <Box p="4">
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
                {product.category}
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
              <Box as="span" color="gray.600" fontSize="sm">
                &euro;
              </Box>
              {product.price}
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < product.rating.rate ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.rating.count} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Product;
