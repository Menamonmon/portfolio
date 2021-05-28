import {
  Box,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { maxWidth } from "../consts";
import { Link, SocialMediaLink } from "../types";
import LinkSpan from "./LinkSpan";

const SocialMediaSection: React.FC<{ links: SocialMediaLink[] }> = ({
  links,
}) => {
  return (
    <VStack mx="auto">
      <Heading size="sm">Follow Me On Social Media</Heading>
      <List as={HStack} justifyContent="space-between" minW="300px" py={5}>
        {links.map(({ icon: Icon, name, path }, idx) => (
          <ListItem
            as={LinkSpan}
            to={path}
            isAnchor
            target="_blank"
            color="inherit"
            key={idx}
            rounded="full"
          >
            <Tooltip label={name}>
              <Text fontSize="3xl">
                <Icon />
              </Text>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

const Footer: React.FC<{
  footerLinks: Link[];
  socialMediaLinks: SocialMediaLink[];
}> = ({ footerLinks, socialMediaLinks }) => {
  return (
    <VStack maxW={maxWidth} mx="auto" my={5}>
      <SocialMediaSection links={socialMediaLinks} />
      <HStack w="100%">
        <Text flexGrow={1} fontWeight="semibold" color="blackAlpha.500">&copy;2021 Copyright Mena Filfil</Text>
        <List
          as={HStack}
          minW="175px"
          justifyContent="space-between"
          alignSelf="start"
        >
          {footerLinks.map((l) => (
            <ListItem as={LinkSpan} to={l.path}>
              {l.name}
            </ListItem>
          ))}
        </List>
      </HStack>
    </VStack>
  );
};

export default Footer;
