import React from "react";
import { HStack, Button, Input, useNumberInput } from "@chakra-ui/react";

const CartInput = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
      //   precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack w="150px">
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  );
};

export default CartInput;
