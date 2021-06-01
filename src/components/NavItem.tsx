import { Button } from "@chakra-ui/button";
import React from "react";
import ChakraRouterLink from "./ChakraRouterLink";

export type Link = {
  path: string;
  name: string;
};

interface NavItemProps {
  link: Link;
}

const NavItem: React.FC<NavItemProps> = ({ link: { path, name } }) => (
  <Button
    as={ChakraRouterLink}
    variant="ghost"
    rounded="xl"
    colorScheme="blue"
    to={path}
  >
    {name}
  </Button>
);

export default NavItem;
