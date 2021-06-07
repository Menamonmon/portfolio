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
  SiTypescript,
} from "react-icons/si";
import { Link } from "./components/NavItem";
import { Project, Skill, SocialMediaLink } from "./types";

const maxWidth = "850px";
const navLinks: Link[] = [
  { name: "Projects", path: "/projects" },
  { name: "Contact Me", path: "/contact-me" },
  {
    name: "Resume",
    path: "https://drive.google.com/file/d/1BeUrs5ElASGrU6YtPuF298oDM0GkgwAL/view?usp=sharing",
    isAnchor: true,
  },
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
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiNodeDotJs, name: "Node.JS" },
  { icon: SiNodeDotJs, name: "Express.JS" },
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
    link: "https://online-connect4.vercel.app",
    createdAt: new Date("2021-02-01"),
    preview:
      "https://lh3.googleusercontent.com/fife/ABSRlIqyKhkF0ujbBbja66KHvnqa66ud20jmjntsJYYny17iyeFWkp9FouE-H870N5l65bPVD8Xw1rbxB61w0qgRXM4mjfHwRGxcxqnWl4ji1E6qVsIYMGh5RjXx8IZlyWj2fP6UQdhuYgU7w6HQjFnegUtXuNhmwcF6QF4DLVVl91GLKAll01wVdpwd_lE60ey9kkel9KVA4WY5Ga56Bd5kuoJUfdvdOkM2LY3-L5fYKZXPzRWOwn4iB1ErDM-76n9AxC3ghuJ9NMoiJNzwX0gCLQHnEiW_WKtJ08XzTWtXBFlptTQB0V43p4wRAwHdbWwiXSFZWUbO3AfpQRyaLwavPddJQYGkS1UpDpe8r9EzKm5BBlALcGpji0m_GyYEPyasAHDp7-nqcynn4I9Y7IpDE8WO_yAf42_HOW48ey-MXIRQvKL6VwB2P43Y_WD4rUIKuiU8wNo_MZodlYb6solyiu5x3suv_LRVx4YVWuLFpVNfMIMQtaGwX9lCDL6r-vDWM4knEJR28IYWn3Qeo9o5r0c2UkQJ3GMi-SVlyL1cANcATY4zf3FgrGspRBCu-1UbwxojYXtMkjB2P-lQAPb2oNy2CecDnH5AsX3askz26ekLHrajV_C13FYIvI4VknrdCFNvosb--hFKAKVHLlDvoRSlT1jXXBO9wIY-tz60gQUjnzT6TEjMruOajLGHDhX0LLgTx6Dzo3NJSIPO0iKMaLVS2Ufw34pwAUk=w1367-h654-ft",
    description:
      "Online connect 4 is a multiplayer real-time game that I created using Node.js, Socket.io, React, and Chakra UI. The game allows you to invite users who are available in the lobby in real-time and be able to play a game with them that updates in real-time with a seamless playing experience.",
    tags: ["Node.JS", "React.JS", "Socket.IO", "PostgreSQL", "Chakra UI"],
    inProgress: false,
  },
  {
    name: "React Vote",
    link: "https://react-vote2.vercel.app/",
    createdAt: new Date("2020-11-01"),
    preview:
      "https://lh3.googleusercontent.com/fife/ABSRlIpaHEOR5qyoAFr-Cedb5NYG241829kbFa7cAjRJvoHHR7QdSAvtYtJX9J98bpZpkg5nFHJl8qVUHi-sFL3HgI11SzWVguKIisdzbW0T0etgEJfjjl8j-0Kid5l3szQyq5nwaOVshIxYy2u8seRQZIG3ZWMeTCyB3Vdgok7ro9SFz6YOtsG2VabA4HOuHKnu5aZOAbRHVZh1dpizDZ01mL4UVSfVxIG1Tgqn9h5ziCI3ga1gXk3Z1AApbEbyyLc8rlGtdBcZx1FDv-iTVUKXbKl7U_QVeq9P0Jrm_kK4WhlBLfvWu2CGYzXF98djJSewP2gcax9nC5g2nZ8zcEz_zP_p4eRxRS1Ppc-aKZU2d0xs1gl0H7qwFxJ0SQ-uEWXKsZBBj90fsPnELnRmXYX6gZu0mm6y9k4QRYiOuf4bKNpVz9guTykBxtq111AGjH70zBGCTFsfHN9J3Qtu0AzYjUPFJCOpqYGQmY9w5jnzPgvYS4DzJROTc_ygeiU0lIlYjoZfLaikOwW0GWH7_Sqxkm9CXPlbJ8DrsWZjvTxhfQgQ_f9Zgfk8gY5Y7pc_uQgRScZwRrSXqlMUjdU1x6L8c7kqwFuRQ0Vuk1yRzb8LnvWiZmdV5zxrRp61a69lvmPXd2-fTc6XPb8Y0ZavQz7VXPmMwhL4PA47BTelnUiZN3EznwiJRBEO6CyTPswVCUEMmTQc0iAwXjTHBM4RF9wLom-3UcR7xG2Uh7M=w965-h638-ft",
    description:
      "React Vote is a comprehensive voting website that was created in React, Django, and the Django REST framework. The website allows you to access your elections, and change your votes whenever you want in real-time. You can also view your previous votes an the results of election in which you are participating.",
    tags: ["React.JS", "Django", "Django REST", "Python"],
    inProgress: false,
  },
  {
    name: "Maizy",
    link: "https://youtu.be/N9_1tq6Banw",
    createdAt: new Date("2020-06-01"),
    preview:
      "https://lh3.googleusercontent.com/fife/ABSRlIqWEfNqTFR5cRiuXQCF5NUadGpcuud4zofl0UjUW2gTcvPi-xF0QkQmq06VAmO1LDT2ldoMyYtsfQyDRSC96UII0jfk_qXdFKbi3Hmabc5otvnW1_mPXcmvclbfB33YQySf-NuBUdOcnok-6qLETReOr6MSwP1_2MPX_MyL6ELQ-TVbIb9jxDCH_l9HT1dbBR09HfEglVfV-abjex6C_fbrQ7V-MMyjb1km8n_bjYlKMpiLHFOM8cLWMf9TV7_q4t6UELvQ-K-c3IkVdSfblHmhFSH7DYFggKuMQbvOuYbqq0JMcUb4zQ7any-1XjGErY0KoVW4NLpPg1le5gEhk3VaEL12zJfLpSJN47VHgQ8zp4fSvmFc_qwuYVN4GIHmWan4G-m83QWIgJxPukyeVTtx7s8CSDj8Esb_YjF5Po6PuYEvc9eC95XpqTOwlqHZBIo0DYW-rim08XQbYK0wag8gRZ_X91SDwOudRBWHY7EKC6xIliY-YcttABkWY1E1LANfmwdVkxW6ADq7svggV79blrLX18_wyMUqjlJAfdDYd6rj1l1i_nEVYVh0ZthXLMxj-i-hCGEVmHtPMhGJQuTpbe5GV4jjWVOBwOye4I4NeZxy4_---eTRp3o0mJgRxFVXIRBi6RAgNy9wysw_tgYh1Qh_EBj-DLiDEymocpulOWbeMFBI3xXmzkylA3FkBWzgkv8eJ1ta53I0BmMhpBsi7IvoOLH48IY=w965-h654-ft",
    description:
      "Maizy is a maze-generation and maze-solving visualizer that is made in Python, and PyGame. It allows you to create your own randomly-generated maze using a variety of maze-generation algorithms, as well as see the computer solving it for you using a variety of techniques like shortest-path, recursive backtracking, and dead-end filling.",
    tags: ["Python", "PyGame"],
    inProgress: false,
  },
  {
    name: "This Website",
    link: "https://menafilfil.vercel.app/",
    createdAt: new Date("2021-05-01"),
    preview:
      "https://lh3.googleusercontent.com/fife/ABSRlIokEtkEZSnZCuuTaBC_6s5DgYPaV_ZKOR9l1D6gIh-zg3KnRWgcGGBmFmq2U2iPreSur8wulq3SAfRCMP2x-h7K21scTIdBtcQCF6S5kz_WJggxeE5dshNZBKe2DSMs0E4whM6VQbMuWdD6xjpqtVqkBRa55xQF3bXG6vlDbpOdwrC2x1pbOJZC8vKeE4TaHK_eN283MLFTFw1_zQwrjo1XxxhIAD_caT9IXbXkpufL2sUFxaeAcY7A_HpswAHI4FO0ut8bp64voP6XfcZd1156x1blWcKje-rjW9DY_s_OEj8MmuhXUjCUJN5rZUxrvF0xcAuYUzR8zY1o8EkEOsajLT7cAjkhn-pcVgn5jBTdfk9_-EMRvlbMvB3Dh9KBDj9lbAmKTDkqgJfNcBYmvu3f3Nebq3e64scjXt7ENYwlWQt_RedIUVmZApznZjURx9RqMS3iaZbBAEZxDiegLh6gUHK5mEBQSPj_4JrXSncN-WHGKnVsRk-raXObFXtA8AMCKEPWr_DJLVVvWgS67oQ7ImWVVRoCjHrHAC06RimbleXKbz_MlxkudAOTnHn8MSh05Dp3qG34QmC01dbQ9-nhvaz5yRLB5YGI77BA8hw-lyj3sx7vd9RvYp9NaTIHgQeBna7thW58q6fwUGS7IGe4GpHjvqYQMdfARzDJHBxmDDnHSz8qK5YkbaXu71H3xxhyEwdVaxI3sUsa96fNc97A_-sNOJRFGnM=w965-h654-ft",
    description:
      "I created this website using Chakra UI and React.JS. I has my resume, some information about me, and a list of my projects.",
    tags: ["Chakra UI", "React.JS"],
    inProgress: false,
  },
  {
    name: "Line of Sight Visualizer",
    link: "https://youtu.be/sG1NvOp_DVM",
    createdAt: new Date("2020-07-01"),
    preview:
      "https://lh3.googleusercontent.com/fife/ABSRlIrJi2tWNYAPk1Wg0hVdLdDe467ommJZXY3Acssop6fj7t3Z-ROIweLQ48z_8fTHZZsBLCpvyaBL6pyrqFMwa5zM9eu4uL5-HAVBLSPf5TYgOSKOtCzmVUzUArTD8E0jX8186p5aBgOxTVQAeHfje-l9gCskYnrjW5CNTOYB6BM2RikvqQ-n2-vwhKr0IguT6WwOTkpMgO5oXTL7R7TwKrEAtZ0RCo5O_7QIuZSqBVYvdwg4TER4g2iPdAJEfBzQiTFOcV9QOFmbuCwo-5zzxWIdo_GxlRa873sz1Wbn20dpGPzMbckVr4nBoV3WelAUqUA3Ak11FH95c8e-wsP_2ZQtUF_nb4WrNzddaJo7UACl4-MtZW4S1qB_njCXkxNwZ3msEgVK76fvhnaktTu-053sioAKAKCd_-kuZT-2kqGnbkyjIHR4JKcGlCj_5dVKG6lNSpnsS4B10BktluY-jmk_B_TcYAB_W73gj-SOL1nXiIktBuDFnTzw7Ea3oJ13uIKYOI-bAFh4k2BoW1RlCoKYiji3cROwtQz0RYehYXL-rGjYv7BNyEozgxA7nDo6nRKqB2QL-bexC6qCcCPBpmX-QWk2jygh4L-ERSBhszSNea-iF6mLopoyhONVmJVySVrKllWfM1SYJgC25U1BzcNUT7aklunSQHA2qgigygWymPQH6Y5-BneWSDciuiRkDkdCZ4-MV3zDeEDH1_USxqYSbd9BbmmbCRA=w965-h654-ft",
    description:
      "This project was created using Python and PyGame. The project aims at visualizing how light works in games by showing the line of sight algorithms which casts rays in all directions, and mimics how shadowing and lights look like in real-life. ",
    tags: ["Python", "PyGame"],
    inProgress: false,
  },
  {
    name: "MedSTEMPowered Website",
    link: "https://medstempowered.org/",
    createdAt: new Date("2021-04-01"),
    preview:
      "https://lh3.googleusercontent.com/fife/ABSRlIoCXivsix2t-OvhKTZvhKDI3byC3ymjIHZmGCdLgv7rWJ1gk0_OnyAUTRx1tvkkxA9jz1ZqX7o1iC_L8bsDtmGyHEIBf6wDq7w1nSP7TeKqEB3jN9il_XslSgCORW4f-_1FoIA8ETcTxDxcyBSrSbAHxjllTSzE96aLWbTeLxKUGm4lt_Pfs2ExHY9o-f8UHuUg6uus3F_ZHR4YDOygTDWp2QjL6KCOvicddAtk5rW75eckwjqOmwrOj0Drjk1lzLtukBLgvyrcw-1X1eIWtHmyaHpYtXQH3sbPK7Y5pZaTfyh0Mi1YW2-crThp0SQLdc9y00jkNDFy5ACqZkq_1PAqtEZBnP7qM4dnffUoS4fVEwxvJI9vFwe7MLpDjDB1pRB-AjzIzGy4Fu8_5NnBFU_Vo9yQsYjeD1KBUZwia75Xsa8kZH8lHohAgAKjdtv9GKKzzL4hPgHb5jFrdrHKi23_iEJAUp_YK_UsA5p6L2PAzSBh5_TggehH13Y3-OoYWqeQCGYrkDwd6ImofQ3kYZMqHhngKet9Taf-hh0ywWYv7eHqsNAvCnM7Kaio-NVQzj3ieYt1hDoUUBGAQ8l7grafijmV6pO9CWReQjMdZW8aHivK_nevKGVaBpy3lvpEa3GKVhyTKgG_foWYQhFyzaQ6dTVvrLNCcyxsJWZ5E-F7mPCM3afXCkbNeviu7VhrqhTfpyQkaU4ZZ9ENYTeG9ewM_AgCFvhXH_E=w965-h654-ft",
    description:
      "This is a website created for MedSTEMPowered, a non-profit organization that aims at increasing awareness for students about the medical field and making it more accessible to them. The website was created using Chakra UI, and React.JS",
    tags: ["Chakra UI", "React.JS"],
    inProgress: true,
  },
  {
    name: "DHS Credit Management",
    link: "https://dhscredits.vercel.app/",
    createdAt: new Date("2020-03-01"),
    preview:
      "https://lh3.googleusercontent.com/fife/ABSRlIo-44wAzcshZjG5PXO04QWLmNkUNUelJD3CsYR2wlQhnamM0KiMRK_dFSC6EO_OIXoiDZ58qzAT3dhRnU_9exQxxfLg8Z53YpHVBtOsYnFTXY4OVpuzS0pWtuleGkw-EoET8mBTeQNgVGLtSw08E6VhpH1lvvh6Q7IlHx83RKN3fI9r19uC9NXcnAX4yP8zRJZdMpHoXXGlSqRiDmnKUrH7YqKRt-Ye701YzPiq4_-WS2_zP5bpMe0qt_r0zPvp9TE1RpLzi7DjFsGGjoWCKA-DGaO4kKbJ8QTnuL2MO4zVwXbFG2TTpXPa67FzX481RyyKW-uPhSlbZWtPpl8ZRNlh-ZqRvCaslGyWqbbUgWb-HSrg8fu8dniYG3dV_PJ_5NfT8fsopy7eb2UFFH9F5cK7A6w3RIb5p4af3OmxVhSv8WEYBWSl1C0HSoeYuXZIl2xrDBPB39MpL7QtGUIkXtcOOOXIiTMSdp15C7h73jAFGoeYG-RbNk6XhpJaQtOcC1rf8GfymiAGzqn6WljFr5xHuyNMkJ3v2IVBSR_JAMLl8knBRK_2O7UJl-Cf5XjPIWVcXp281j8NKJaCwkxZVvSls5vm_byAOEvj4LRTuVma9t_1pG7_b_QKd80yI6bxqCkUFxD0UsQGfSjOMYI9D4ERcz1RYBaF8Mk_VzzR_2Xl1jphs_nv4M9OODBOYJQTLCaaTWJ7LX7a9HhAkcY7cnQXCJLZScfni04=w965-h654-ft",
    description:
      "DHS Credit Management is a system that I am creating for my high school to help the student counseling department keep track of the course credits of students at the school. This project is created using React and Django.",
    tags: ["React.JS", "Material UI", "Django", "Django REST", "Python"],
    inProgress: true,
  },
  {
    name: "FX Trader Circle",
    link: "https://fxtradercircle.com/",
    createdAt: new Date("2020-05-01"),
    preview:
      "https://lh3.googleusercontent.com/fife/ABSRlIrumw0hpAaf4azA-yrff-G071QhPVEAjKGaTX50IHBitbDfcu8cL3PqIKtRpAsJbfu3tJoL26AW928vbq4bMP9OHfgOtraFHutjKgQIPjQ99bAfA5_JY5hdK9sbMVNQi8Fbn7kIB98vhIX3jJ6NYr6ZVIxj5Peu-pEkHJtWukgqkK1_GiE2c2zoL4_zFUFRFs6EsCKeK7GZ1Q-3R85LzlTFJqfHDRjGU8gm9FuBuF392zlfEtxwuFzgI2DWlBrXOigMLg-ZVSLC_0L0rUDPFOZxAPP-pPVJQrOpApnxylVlpGj1U4ny-L0fd8jjhpVky8I-Fui_CHsSJd4m_7PhFe2CY6NBUdrMNcNRkTbu7TpFhhzK4nVDN24qrp69vJw6fQI4CadND8nJwOQJW0iPMnzacx8EdT3A5n9aJHTlpoiRCcR3M48k3I0OxGHMnGYn6ON-X8dcDG1XU8zgydL1LTFG9dGQ_fy4cRxh4taf5xGEclJhW4omtjACLmBgOhfeuVR1NKhoM9XZA8-Lx4vqEskSvw_Q5DxJ-CIkr7S2CkXYY_WktKnUv9aJhBZJZLAvjgD6ozJ-iXSWhRB5vBfi3eOfTVrGi9A7HEcz2atuByURw8Rj4lA7K9yUVVUUN5c4CydxuCF4qGmlMAzrxc-YhIKrXc6JztV1EZX21NQze2J0zKpRdHvuRKVokvoWcQoziJkNV3XFeRiLNq_VvEvXHWXiafuiqw6h4H0=w965-h654-ft",
    description:
      "FX trader circle is a platform for teaching lessons about trading in the stock market. It is built in React and Material UI on the frontend and Django, and Channels at the backend for enabling the real-time chat features. I mainly worked on the Chatrooms feature in this project as displayed in the screenshot.",
    tags: [
      "React.JS",
      "Material UI",
      "Django",
      "Channels",
      "WebSockets",
      "Python",
    ],
    inProgress: true,
  },
];

export { maxWidth, navLinks, skills, footerLinks, socialMediaLinks, projects };
