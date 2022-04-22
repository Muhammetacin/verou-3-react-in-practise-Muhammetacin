import React from "react";
import { Box, Image, Badge, Skeleton, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Product = ({ product, loaded }) => {
  return (
    <div className="flex flex-grow-0 items-stretch">
      {loaded ? (
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

            <Button mt="4">
              Add to cart
            </Button>
          </Box>
        </Box>
      ) : (
        <Box w="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
          <Skeleton boxSize="64" objectFit="contain" p="4" m="auto" />

          <Box p="4">
            <Box display="flex" alignItems="baseline">
              <Skeleton borderRadius="full" px="2" colorScheme="teal">
                New
              </Skeleton>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                <Skeleton borderRadius="full">{product.category}</Skeleton>
              </Box>
            </Box>

            <Skeleton
              borderRadius="full"
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.title}
            </Skeleton>

            <Skeleton borderRadius="full" my="1" w="20">
              <Box as="span" color="gray.600" fontSize="sm">
                &euro;
              </Box>
              {product.price}
            </Skeleton>

            <Box display="flex" mt="2" alignItems="center">
              <Skeleton borderRadius="full">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < product.rating.rate ? "teal.500" : "gray.300"}
                    />
                  ))}
              </Skeleton>
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                <Skeleton borderRadius="full">
                  {product.rating.count} reviews
                </Skeleton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Product;
