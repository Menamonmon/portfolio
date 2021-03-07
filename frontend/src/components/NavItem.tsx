import React from "react";

import { Button } from "@material-ui/core";

export type Link = {
  path: string;
  name: string;
  key: React.Key;
};

interface NavItemProps {
  link: Link;
}

const NavItem: React.FC<NavItemProps> = ({ link: { path, name, key } }) => (
  <Button
    color="inherit"
    size="large"
    style={{ textTransform: "none", fontWeight: 700 }}
    href={path}
    key={key}
  >
    {name}
  </Button>
);

export default NavItem;
