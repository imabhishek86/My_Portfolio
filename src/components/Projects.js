// Projects.jsx
import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "../components/ProjectsStyle";
import ProjectCard from "./ProjectCards"; // Adjust the import according to your file structure
import { projects } from "../components/constants";
import Modal from "./Modal"; // Import the modal
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Combine constant projects
  const allProjects = [...projects];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Title>Projects</Title>
        </motion.div>
        
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Desc>
            I have worked on a wide range of projects. From web apps to Android
            apps. Here are some of my projects.
          </Desc>
        </motion.div>
        
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <ToggleButtonGroup>
          <ToggleButton
            $active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            $active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            $active={toggle === "android app"}
            onClick={() => setToggle("android app")}
          >
            ANDROID APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            $active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>
        </motion.div>
        
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          style={{ width: "100%" }}
        >
          <CardContainer>
            {allProjects
              .filter(
                (project) => toggle === "all" || project.category === toggle
              )
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => openModal(project)} // Pass the project to the modal
                />
              ))}
          </CardContainer>
        </motion.div>
      </Wrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject} // Pass the selected project to the modal
      />
    </Container>
  );
};

export default Projects;
