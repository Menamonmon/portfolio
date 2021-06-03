import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, List, ListItem, Text, VStack } from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import React from "react";
import { Skill } from "../types";
import HoverEnlargeAnimation from "./HoverEnlargeAnimation";
import Title from "./Title";
import TransitionOnEnterViewport from "./TransitionOnEnterViewport";

const SkillItem: React.FC<Skill> = ({ name, icon: Icon }) => {
  const bg = useColorModeValue("gray.200", "gray.900");
  const hoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <TransitionOnEnterViewport as={ScaleFade}>
      <HoverEnlargeAnimation transform="scale(1.2)">
        <ListItem
          as={VStack}
          rounded="lg"
          bgColor={bg}
          boxShadow="lg"
          _hover={{
            bgColor: hoverBg,
            cursor: "pointer",
            transition: "all 500ms",
          }}
          transition="all 500ms"
          minW="150px"
          p={5}
          m={2}
          userSelect="none"
        >
          <Text fontSize="5xl">
            <Icon />
          </Text>
          <Heading size="md">{name}</Heading>
        </ListItem>
      </HoverEnlargeAnimation>
    </TransitionOnEnterViewport>
  );
};

const SkillsList: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <Box id="skills">
      <Title>My Skills 👨‍💻⚙</Title>
      <List
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {skills.map((s, idx) => (
          <SkillItem {...s} key={idx} />
        ))}
      </List>
    </Box>
  );
};

export default SkillsList;
