import {
  SiDjango,
  SiDocker,
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
} from "react-icons/si";
import { Link } from "./components/NavItem";
import { Skill } from "./types";

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

export { maxWidth, navLinks, skills };
