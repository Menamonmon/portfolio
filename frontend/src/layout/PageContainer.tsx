import { Box } from "@chakra-ui/layout";
import React from "react";
import { maxWidth } from "../consts";

const PageContainer: React.FC = ({ children }) => {
  return (
    <Box maxWidth={maxWidth} mx="auto" mt={55}>
      {children}
    </Box>
  );
};

export default PageContainer;
