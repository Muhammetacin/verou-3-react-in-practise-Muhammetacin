import { Box, Image, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import CartInput from "./CartInput";

const CartItem = () => {
  return (
    <Box w="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
      <HStack>
        <Image
          boxSize="32"
          objectFit="contain"
          src="https://via.placeholder.com/100"
          alt="dummy product"
          p="4"
        />

        <VStack>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            Title of the product will be here
          </Box>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              &euro;
            </Box>
            49.99
          </Box>
          <Box>
            <CartInput />
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CartItem;
