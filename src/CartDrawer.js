import React from "react";
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize="3xl">Shopping cart</DrawerHeader>
        <DrawerBody>
          <CartItem />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
