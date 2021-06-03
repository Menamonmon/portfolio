import { Button } from "@chakra-ui/button";
import React from "react";
import ChakraRouterLink from "./ChakraRouterLink";

export type Link = {
  path: string;
  name: string;
  isAnchor?: boolean;
};

interface NavItemProps {
  link: Link;
}

const NavItem: React.FC<NavItemProps> = ({
  link: { path, name, isAnchor },
}) => {
  const LinkComponent = isAnchor ? "a" : ChakraRouterLink;
  const linkProps = isAnchor
    ? { href: path, target: "_blank" }
    : {
        to: path,
      };
  return (
    <Button
      as={LinkComponent}
      variant="ghost"
      rounded="xl"
      colorScheme="blue"
      {...linkProps}
    >
      {name}
    </Button>
  );
};

export default NavItem;
