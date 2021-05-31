import { Box } from "@chakra-ui/layout";
import { SlideFade } from "@chakra-ui/transition";
import React, { useEffect, useState } from "react";
import { maxWidth } from "../consts";

const PageContainer: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <SlideFade style={{ transitionDuration: "100ms" }} in={open}>
      <Box maxWidth={maxWidth} mx="auto" mt={55}>
        {children}
      </Box>
    </SlideFade>
  );
};

export default PageContainer;
