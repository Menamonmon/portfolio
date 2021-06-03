import { Box, ListItem, UnorderedList } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";
import Body from "../components/Body";
import LinkSpan from "../components/LinkSpan";
import SkillsList from "../components/SkillsList";
import Title from "../components/Title";
import { skills } from "../consts";
import PageContainer from "../layout/PageContainer";

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Box>
        <Helmet>
          <title>Mena Filfil - Home</title>
        </Helmet>
        <Title>Hey, I'm Mena 👋</Title>
        <Body>
          I'm a high school junior from NJ who is passionate about STEM and
          computer science. I mostly work on full-stack web development
          projects, and some game development in pygame. My experience is mainly
          with backend and frontend development, but I always strive to improve
          my skills through continous project-based learning.
        </Body>
        <Body>
          I am involved in multiple projects and extracurriculars which include:
          <UnorderedList pl={5}>
            <ListItem>
              Freelancing on{" "}
              <LinkSpan to="https://fiverr.com/menamonmon" isAnchor>Fiverr</LinkSpan>
            </ListItem>
            <ListItem>
              Working on{" "}
              <LinkSpan to="https://medstempowered.org" isAnchor>
                the MedSTEMPowered
              </LinkSpan>{" "}
              website
            </ListItem>
            <ListItem>Leading my school's coding and robotics clubs</ListItem>
            <ListItem>
              Creating special utility applications and website that my school
              uses
            </ListItem>
            <ListItem>
              Working on my own independent{" "}
              <LinkSpan to="/projects" >projects</LinkSpan>
            </ListItem>
          </UnorderedList>
        </Body>
        <Body>
          My skills range from Material UI and Chakra UI in the frontend to
          creating REST API's using Django, Node.js (express), and other backend
          technologies. Take a close look at my skills{" "}
          <LinkSpan to="#skills" isAnchor>
            here
          </LinkSpan>
          .
        </Body>
        <SkillsList skills={skills} />
      </Box>
    </PageContainer>
  );
};

export default HomePage;
