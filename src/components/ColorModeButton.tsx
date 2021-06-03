import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip label={colorMode + " mode"}>
      <IconButton
        rounded="xl"
        aria-label="color-mode-btn"
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};

export default ColorModeButton;
