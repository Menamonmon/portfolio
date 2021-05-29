import { Box, Heading, List, ListItem, Text, VStack } from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import React from "react";
import { Skill } from "../types";
import Title from "./Title";
import TransitionOnEnterViewport from "./TransitionOnEnterViewport";

const SkillItem: React.FC<Skill> = ({ name, icon: Icon }) => {
  return (
    <TransitionOnEnterViewport as={ScaleFade}>
      <ListItem
        as={VStack}
        rounded="lg"
        bgColor="gray.200"
        boxShadow="lg"
        _hover={{
          bgColor: "gray.100",
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
