import React from "react";

import profilePic from "./../img/profile-pic.jpg";
import NavItem, { Link } from "./NavItem";
import { Heading, HStack } from "@chakra-ui/layout";
import { List } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Link as NavLink } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Avatar } from "@chakra-ui/avatar";

interface Props {
  links: Link[];
  title: String;
  homeLink: Link;
}

const Navbar: React.FC<Props> = ({ homeLink, title, links }) => {
  return (
    <HStack py={2} px={3}>
      <Box flexGrow={1} >
        <Heading size="lg">{title}</Heading>
      </Box>
      <List as={HStack} >
        {links.map((link, idx) => (
          <NavItem link={link} key={idx}/>
        ))}
      </List>
    </HStack>
  );
};

export default Navbar;
