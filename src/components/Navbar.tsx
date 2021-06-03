import React from "react";

import NavItem, { Link } from "./NavItem";
import { HStack } from "@chakra-ui/layout";
import { List } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { maxWidth } from "../consts";
import ChakraRouterLink from "./ChakraRouterLink";
import ColorModeButton from "./ColorModeButton";
import { Avatar } from "@chakra-ui/avatar";
import avatarPic from "../img/profile-pic.jpg";
import { useColorModeValue } from "@chakra-ui/color-mode";

interface Props {
  links: Link[];
  homeLink: Link;
}

const Navbar: React.FC<Props> = ({ homeLink, links }) => {
  const navColor = useColorModeValue("white", "gray.900");
  return (
    <Box
      boxShadow="lg"
      position="fixed"
      top={0}
      zIndex={99}
      bgColor={navColor}
      w="100%"
    >
      <HStack py={2} maxWidth={maxWidth} mx="auto">
        <Avatar
          name="Mena Filfil"
          src={avatarPic}
          as={ChakraRouterLink}
          to={homeLink.path}
          size="sm"
        />
        <List as={HStack} flexGrow={1} justifyContent="center">
          {links.map((link, idx) => (
            <NavItem link={link} key={idx} />
          ))}
        </List>
        <ColorModeButton />
      </HStack>
    </Box>
  );
};

export default Navbar;
