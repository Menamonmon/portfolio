import React from "react";

import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Link as NavLink,
} from "@material-ui/core";
import profilePic from "./../img/profile-pic.jpg";
import NavItem, { Link } from "./NavItem";

interface Props {
  links: Link[];
  title: String;
  homeLink: Link;
}

const Navbar: React.FC<Props> = ({ homeLink, title, links }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink href={homeLink.path}>
          <Avatar src={profilePic} style={{ marginRight: "20px" }} />
        </NavLink>
        <div style={{ flexGrow: 1 }}>
          <Typography color="inherit" variant="h4">
            {title}
          </Typography>
        </div>
        <div className="nav-links">
          {links.map((link: Link) => (
            <NavItem link={link} />
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
