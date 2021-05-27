import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import React, { useState } from "react";
import { FaSun, FaRegSun } from "react-icons/fa";

const ColorModeButton: React.FC = () => {
  const [mode, setMode] = useState<string>("dark");

  const switchColor = () => {
    setMode((p: string) => (p === "dark" ? "light" : "dark"));
  };
  return (
    <Tooltip label={mode + " mode"} rounded="lg">
      <IconButton
        rounded="xl"
        aria-label="color-mode-btn"
        icon={mode === "light" ? <FaSun /> : <FaRegSun />}
        onClick={switchColor}
      />
    </Tooltip>
  );
};

export default ColorModeButton;
