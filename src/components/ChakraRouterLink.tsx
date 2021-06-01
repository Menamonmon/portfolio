import React from "react";
import { LinkProps, Link as RouterLink } from "react-router-dom";
import {
  LinkProps as ChakraLinkProps,
  Link as ChakraLink,
} from "@chakra-ui/react";

export type ChakraRouterLinkProps = LinkProps & ChakraLinkProps;
const ChakraRouterLink: React.FC<ChakraRouterLinkProps> = (props) => {
  return (
    <ChakraLink
      _hover={{ textDecor: "none" }}
      as={RouterLink}
      {...props}
    ></ChakraLink>
  );
};

export default ChakraRouterLink;
