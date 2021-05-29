import { Box } from "@chakra-ui/layout";
import React, { CSSProperties } from "react";

const HoverEnlargeAnimation: React.FC<CSSProperties> = ({ children, ...rest }) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.1)",
        transition: "500ms",
        ...rest,
      }}
      transition="500ms"
    >
      {children}
    </Box>
  );
};

export default HoverEnlargeAnimation;
