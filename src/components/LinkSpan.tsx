import { Link as ChakraAnchorLink } from "@chakra-ui/layout";
import React from "react";
import ChakraRouterLink, { ChakraRouterLinkProps } from "./ChakraRouterLink";

const LinkSpan: React.FC<
  ChakraRouterLinkProps & { isAnchor?: boolean; to: string }
> = ({ isAnchor, to, ...props }) => {
  const linkColor = "blue.400";
  return isAnchor ? (
    <ChakraAnchorLink
      {...props}
      href={to}
      color={linkColor}
      fontWeight="semibold"
      _hover={{ filter: "brightness(1.1)" }}
    />
  ) : (
    <ChakraRouterLink
      {...props}
      to={to}
      color={linkColor}
      fontWeight="semibold"
      _hover={{ filter: "brightness(1.1)" }}
    />
  );
};

export default LinkSpan;
