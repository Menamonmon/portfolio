import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

type Link = {
  path: string;
  name: string;
  key: React.Key;
}

interface Props {
  links: Link[];
  title: String;
  homeLink: Link;
}

const Navbar: React.FC<Props> = ({ homeLink, title, links }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <div className="nav-links">
          {links.map((link: Link) => (
            <Button color="inherit" key={link.key}>
              {link.name}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
