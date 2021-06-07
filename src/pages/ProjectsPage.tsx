import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, List } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import LinkSpan from "../components/LinkSpan";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { projects } from "../consts";
import PageContainer from "../layout/PageContainer";
import { Project } from "../types";

const ProjectsPage: React.FC = () => {
  const [openedProject, setOpenedProject] = useState<Project | null>(null);
  const onClose = useCallback(() => setOpenedProject(null), [setOpenedProject]);

  return (
    <PageContainer>
      <Box>
        <Title>My Projects ⚒</Title>
        <Helmet>
          <title>Mena Filfil - Projects</title>
        </Helmet>
        <List
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {projects.map((p, idx) => (
            <ProjectCard
              project={p}
              key={idx}
              onClick={() => setOpenedProject(p)}
            />
          ))}
        </List>
        <Modal isOpen={openedProject !== null} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{openedProject?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody w="fit-content">
              <LinkSpan
                isAnchor
                target="_blank"
                to={openedProject?.preview ? openedProject.preview : ""}
              >
                <Image
                  src={openedProject?.preview}
                  rounded="lg"
                  _hover={{
                    filter: "brightness(1.2)  ",
                  }}
                  w="700px"
                />
              </LinkSpan>
              {openedProject?.description}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </PageContainer>
  );
};

export default ProjectsPage;
