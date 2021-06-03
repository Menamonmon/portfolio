import { Image } from "@chakra-ui/image";
import { Badge, Box, Heading, HStack, ListItem, Text } from "@chakra-ui/layout";
import React, { MouseEventHandler } from "react";
import { Project } from "../types";
import { ImAttachment } from "react-icons/im";
import { FiMoreHorizontal } from "react-icons/fi";
import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import TransitionOnEnterViewport from "./TransitionOnEnterViewport";
import { ScaleFade } from "@chakra-ui/transition";
import { useColorModeValue } from "@chakra-ui/color-mode";

function formatDate(date: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]}, ${date.getFullYear()}`;
}

const TagsBox: React.FC<{ tags: Project["tags"]; inProgress: boolean }> = ({
  tags,
  inProgress,
}) => {
  return (
    <Box>
      {tags.map((t) => (
        <Badge colorScheme="blue" mx={1}>
          {t}
        </Badge>
      ))}
      {inProgress && (
        <Badge colorScheme="red" mx={1}>
          In Progress
        </Badge>
      )}
    </Box>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: MouseEventHandler;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { name, link, description, preview, createdAt, tags, inProgress },
  onClick,
}) => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const dateColor = useColorModeValue("blackAlpha.700", "gray.400");
  const border = useColorModeValue("gray.50", "gray.600");
  return (
    <TransitionOnEnterViewport as={ScaleFade}>
      <ListItem
        as={Box}
        w="250px"
        rounded="lg"
        mx={3}
        my={2}
        borderWidth="1px"
        borderColor={border}
        boxShadow="lg"
        h="fit-content"
        minH="md"
        maxH="md"
        bgColor={bg}
        _hover={{
          transform: "scale(1.1)",
          transition: "0.3s ease",
        }}
        transition="0.3s ease"
      >
        <Image src={preview} roundedTop="lg" />
        <Box p={3}>
          <TagsBox tags={tags} inProgress={inProgress} />
          <HStack justifyContent="space-between">
            <Heading size="md">{name}</Heading>
            {link && (
              <Tooltip label="Live Link">
                <IconButton
                  aria-label="Live Link"
                  rounded="full"
                  as="a"
                  target="_blank"
                  href={link}
                >
                  <ImAttachment />
                </IconButton>
              </Tooltip>
            )}
          </HStack>
          <Heading size="xs" color={dateColor} my={3}>
            {formatDate(createdAt)}
          </Heading>
          <Text noOfLines={4}>{description}</Text>
          <Tooltip label="More">
            <IconButton
              aria-label="more btn"
              rounded="full"
              float="right"
              onClick={onClick}
            >
              <FiMoreHorizontal />
            </IconButton>
          </Tooltip>
        </Box>
      </ListItem>
    </TransitionOnEnterViewport>
  );
};

export default ProjectCard;
