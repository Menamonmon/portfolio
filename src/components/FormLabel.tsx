import { Text, TextProps } from "@chakra-ui/layout";
import React from "react";

const FormLabel: React.FC<TextProps> = (props) => (
  <Text my={1} fontWeight="semibold" {...props} />
);

export default FormLabel;
