import { useColorModeValue } from "@chakra-ui/color-mode";
import { Text, TextProps } from "@chakra-ui/layout";
import React from "react";

const Body: React.FC<TextProps> = (props) => {
  const color = useColorModeValue("gray.600", "gray.300");
  return <Text {...props} py={2} fontSize="lg" color={color} />;
};

export default Body;
