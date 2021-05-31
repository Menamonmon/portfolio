import {
  SiDjango,
  SiDocker,
  SiFacebook,
  SiFiverr,
  SiGit,
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
import { Project, Skill, SocialMediaLink } from "./types";

const maxWidth = "850px";
const navLinks: Link[] = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];
const skills: Skill[] = [
  { icon: SiReact, name: "React.js" },
  { icon: SiDjango, name: "Django" },
  { icon: SiSocketDotIo, name: "Socket.IO" },
  { icon: SiPython, name: "Python" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
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
const projects: Project[] = [
  {
    name: "Online Connect 4",
    link: "https://menamonmon.github.io/online-connect4/",
    createdAt: new Date("2021-02-01"),
    preview:
      "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
    description:
      "Online connect 4 is a multiplayer real-time game that I created using Node.js, Socket.io, React, and Chakra UI. The game allows you to invite users who are available in the lobby in real-time and be able to play a game with them that updates in real-time with a seamless playing experience.",
    tags: ["Node.JS", "React.JS", "Socket.IO", "PostgreSQL", "Chakra UI"],
    inProgress: false,
  },
  {
    name: "React Vote",
    link: "https://menamonmon.github.io/react-vote/",
    createdAt: new Date("2020-11-01"),
    preview:
      "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
    description:
      "React Vote is a comprehensive voting website that was created in React, Django, and the Django REST framework. The website allows you to access your elections, and change your votes whenever you want in real-time. You can also view your previous votes an the results of election in which you are participating.",
    tags: ["React.JS", "Django", "Django REST", "Python"],
    inProgress: false,
  },
  {
    name: "Maizy",
    link: "https://youtube.com/",
    createdAt: new Date("2020-06-01"),
    preview:
      "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
    description:
      "Maizy is a maze-generation and maze-solving visualizer that is made in Python, and PyGame. It allows you to create your own randomly-generated maze using a variety of maze-generation algorithms, as well as see the computer solving it for you using a variety of techniques like shortest-path, recursive backtracking, and dead-end filling.",
    tags: ["Python", "PyGame"],
    inProgress: false,
  },
  {
    name: "MedSTEMPowered Website",
    link: "https://medstempowered.org/",
    createdAt: new Date("2021-04-01"),
    preview:
      "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
    description:
      "This is a website created for MedSTEMPowered, a non-profit organization that aims at increasing awareness for students about the medical field and making it more accessible to them. The website was created using Chakra UI, and React.JS",
    tags: ["Chakra UI", "React.JS"],
    inProgress: true,
  },
  {
    name: "This Website",
    link: "https://menafilfil.vercel.app/",
    createdAt: new Date("2021-05-01"),
    preview:
      "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
    description:
      "I created this website using Chakra UI and React.JS. I has my resume, some information about me, and a list of my projects.",
    tags: ["Chakra UI", "React.JS"],
    inProgress: false,
  },
  {
    name: "Line of Sight Visualizer",
    link: "https://youtube.com/",
    createdAt: new Date("2020-07-01"),
    preview:
      "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
    description:
      "This project was created using Python and PyGame. The project aims at visualizing how light works in games by showing the line of sight algorithms which casts rays in all directions, and mimics how shadowing and lights look like in real-life. ",
    tags: ["Python", "PyGame"],
    inProgress: false,
  },
  {
    name: "DHS Credit Management",
    link: "https://youtube.com/",
    createdAt: new Date("2020-03-01"),
    preview:
      "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
    description:
      "DHS Credit Management is a system that I am creating for my high school to help the student counseling department keep track of the course credits of students at the school. This project is created using React and Django.",
    tags: ["React.JS", "Material UI", "Django", "Django REST", "Python"],
    inProgress: true,
  },
];

export { maxWidth, navLinks, skills, footerLinks, socialMediaLinks, projects };
