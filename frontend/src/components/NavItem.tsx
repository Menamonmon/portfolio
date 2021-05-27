import { Button } from "@chakra-ui/button";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export type Link = {
  path: string;
  name: string;
  key: React.Key;
};

interface NavItemProps {
  link: Link;
}

const NavItem: React.FC<NavItemProps> = ({ link: { path, name, key } }) => (
  <Button as={RouterLink} to={path} size="sm">
    {name}
  </Button>
);

export default NavItem;
