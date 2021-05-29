import { Image } from "@chakra-ui/image";
import { Badge, Box, Heading, HStack, ListItem, Text } from "@chakra-ui/layout";
import React, { MouseEventHandler } from "react";
import { Project } from "../types";
import { GrAttachment } from "react-icons/gr";
import { FiMoreHorizontal } from "react-icons/fi";
import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import TransitionOnEnterViewport from "./TransitionOnEnterViewport";
import { ScaleFade } from "@chakra-ui/transition";

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

const TagsBox: React.FC<{ tags: Project["tags"] }> = ({ tags }) => (
  <Box>
    {tags.map((t) => (
      <Badge colorScheme="blue" mx={1}>
        {t}
      </Badge>
    ))}
  </Box>
);

interface ProjectCardProps {
  project: Project;
  onClick: MouseEventHandler;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { name, link, description, preview, createdAt, tags },
  onClick,
}) => (
  <TransitionOnEnterViewport as={ScaleFade}>
    <ListItem
      as={Box}
      w="250px"
      rounded="lg"
      mx={3}
      my={2}
      boxShadow="lg"
      h="fit-content"
      minH="md"
      maxH="md"
      bgColor="gray.100"
      _hover={{
        transform: "scale(1.1)",
        transition: "0.3s ease",
      }}
      transition="0.3s ease"
    >
      <Image src={preview} roundedTop="lg" />
      <Box p={3}>
        <TagsBox tags={tags} />
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
                <GrAttachment />
              </IconButton>
            </Tooltip>
          )}
        </HStack>
        <Heading size="xs" color="blackAlpha.700" my={3}>
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

export default ProjectCard;