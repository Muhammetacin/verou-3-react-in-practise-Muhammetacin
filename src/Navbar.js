import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Center, Circle, Divider, Icon } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import CartDrawer from "./CartDrawer";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <nav className="bg-slate-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <span className="text-blue-700 font-bold">e</span>
            commerce
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className={
                  useLocation().pathname === "/"
                    ? "block py-1 pr-3 pl-3 text-white bg-blue-700 rounded-md dark:text-white"
                    : "block py-1 pr-3 pl-3 text-gray-700 border-b border-gray-100 hover:bg-blue-700 hover:text-white hover:rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="products"
                className={
                  useLocation().pathname === "/products"
                    ? "block py-1 pr-3 pl-3 text-white bg-blue-700 rounded-md dark:text-white"
                    : "block py-1 pr-3 pl-3 text-gray-700 border-b border-gray-100 hover:bg-blue-700 hover:text-white hover:rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                }
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <Center>
              <Divider orientation="vertical" />
            </Center>
            <li>
              <button className="rounded-full" onClick={handleClick}>
                <Circle size="8" bg="#319795" color="white">
                  <Icon as={MdShoppingCart} boxSize="4" />
                </Circle>
              </button>
            </li>
          </ul>
        </div>
        <CartDrawer isOpen={isOpen} onClose={onClose} />
      </div>
    </nav>
  );
};

export default Navbar;
