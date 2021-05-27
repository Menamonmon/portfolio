import { Heading, HeadingProps } from "@chakra-ui/layout";
import React from "react";

const Title: React.FC<HeadingProps> = (props) => {
  const borderColor = "gray.300";
  return (
    <Heading
      {...props}
      as="code"
      size="lg"
      py={3}
      mt={12}
      mb={5}
      borderBottom="1px"
      display="inline-block"
      borderColor={borderColor}
    />
  );
};

export default Title;
