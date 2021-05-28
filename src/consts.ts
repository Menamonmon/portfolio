import {
  SiDjango,
  SiDocker,
  SiFacebook,
  SiFiverr,
  SiGithub,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMaterialUi,
  SiNextDotJs,
  SiNodeDotJs,
  SiPostgresql,
  SiPypi,
  SiPython,
  SiReact,
  SiSocketDotIo,
  SiTwitter,
} from "react-icons/si";
import { Link } from "./components/NavItem";
import { Skill, SocialMediaLink } from "./types";

const maxWidth = "700px";
const navLinks: Link[] = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];
const skills: Skill[] = [
  { icon: SiReact, name: "React.js" },
  { icon: SiDjango, name: "Django" },
  { icon: SiSocketDotIo, name: "Socket.IO" },
  { icon: SiPython, name: "Python" },
  { icon: SiMaterialUi, name: "Material UI" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiNodeDotJs, name: "Node.JS" },
  { icon: SiHtml5, name: "HTML/CSS" },
  { icon: SiLinux, name: "Linux" },
  { icon: SiNextDotJs, name: "Next.JS" },
  { icon: SiPypi, name: "Pygame" },
  { icon: SiDocker, name: "Docker" },
];
const footerLinks: Link[] = [
  { name: "Get In Touch", path: "/contact-me" },
  { name: "Privacy", path: "/privacy-policy" },
];
const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: SiFacebook,
    name: "Facebook",
    path: "https://facebook.com/mena.filfil.9",
  },
  {
    icon: SiTwitter,
    name: "Twitter",
    path: "https://twitter.com/menamonmon9",
  },
  {
    icon: SiGithub,
    name: "Github",
    path: "https://github.com/menamonmon",
  },
  {
    icon: SiFiverr,
    name: "Fiverr",
    path: "https://fiverr.com/menamonmon",
  },
  {
    icon: SiGmail,
    name: "Email",
    path: "mailto:monyasser111@gmail.com",
  },
];

export { maxWidth, navLinks, skills, footerLinks, socialMediaLinks };
