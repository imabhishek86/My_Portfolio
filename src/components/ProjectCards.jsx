import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai"; // Import the GitHub icon
import { FaCheckCircle, FaTasks, FaLeaf, FaUtensils, FaBriefcase, FaLaptopCode, FaCloudSun } from "react-icons/fa"; // Added project icons
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Styled Components
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: ${({ $expanded }) => ($expanded ? "unset" : 3)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-height: ${({ $expanded }) => ($expanded ? "none" : "4.5em")};
  transition: max-height 0.4s ease-in-out, -webkit-line-clamp 0.4s ease-in-out;
`;


// Adjust Card Height for Responsiveness
const Card = styled(motion.div)`
  width: 330px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 500px; /* Removed fixed height */
  min-height: 500px; /* Set minimum height */
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 50px 8px rgba(133, 76, 230, 0.4);
    filter: brightness(1.1);
  }


  @media only screen and (max-width: 768px) {
    width: 100%; /* Ensure card takes full width on smaller screens */
  }
`;

// Increase Modal Size for Large Screens
const ModalContent = styled.div`
  background-color: rgba(
    10,
    10,
    10,
    0.85
  ); /* Slightly transparent black background */
  border: 3px solid #0a0a0a; /* Border with accent color */
  border-radius: 1rem; /* Rounded corners */
  padding: 1.5rem; /* Padding similar to p-6 */

  /* Accent color shadow for depth */
  box-shadow: 0 0 20px rgba(184, 9, 195, 0.6), 0 0 10px rgba(184, 9, 195, 0.4);

  width: 600px; /* Width of the modal */
  max-width: 90%; /* Responsive for smaller screens */
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 90%; /* Adjustments for smaller screens */
  }

  @media only screen and (min-width: 1200px) {
    width: 800px; /* Adjustments for larger screens */
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary + 15};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  font-size: 80px;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.white};
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
  border: 0.1px solid #854ce6;
`;


const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};

  &:hover {
    border-color: ${({ theme }) => theme.primary}; // Change border on hover
  }
`;

const GitHubIcon = styled(AiOutlineGithub)`
  font-size: 20px;
  color: ${({ theme }) => theme.text_secondary};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.5); // Enlarges the icon on hover
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 10px;
`;

const ProjectButton = styled.a`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 15};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

// Modal Component
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* 40% transparent */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ProjectCards = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const handleCardClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false); // Close the modal if it's already open
    } else {
      setIsModalOpen(true); // Open the modal if it's closed
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openGitHubLink = (e) => {
    e.stopPropagation();
    window.open(project.github, "_blank"); // Opens GitHub link in a new tab
  };
  const getProjectIcon = () => {
    const title = project.title.toLowerCase();
    if (title.includes("to-do") || title.includes("todo")) {
      return <FaCheckCircle />;
    } else if (title.includes("ecosystem") || title.includes("conservation")) {
      return <FaLeaf />;
    } else if (title.includes("recipe") || title.includes("meal")) {
      return <FaUtensils />;
    } else if (title.includes("udyog") || title.includes("sarthi")) {
      return <FaBriefcase />;
    } else if (title.includes("portfolio")) {
      return <FaLaptopCode />;
    } else if (title.includes("weather")) {
      return <FaCloudSun />;
    } else if (project.category === "github repos") {
      return <AiOutlineGithub />;
    }
    return <FaTasks />; // Default icon
  };

  return (
    <>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2500} scale={1.02} glareEnable={true} glareMaxOpacity={0.3} glareColor="#854ce6" glarePosition="all" style={{ width: '100%', maxWidth: '330px' }}>
        <Card
          onClick={handleCardClick}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
        <IconContainer>
          {getProjectIcon()}
        </IconContainer>
        <TitleWrapper>
          <Title>{project.title}</Title>
          <GitHubIcon onClick={openGitHubLink}></GitHubIcon>
        </TitleWrapper>
        <Date>{project.date}</Date> {/* Date is now shown after the title */}
        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Description $expanded={expanded}>{project.description}</Description>
        <Members>
          {project.members?.map((member, index) => (
            <Avatar key={index} src={member.img} />
          ))}
        </Members>
        <ButtonGroup>
          <ProjectButton href={project.github || "#"} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            GitHub
          </ProjectButton>
          {project.demo && (
            <ProjectButton href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              Live Demo
            </ProjectButton>
          )}
        </ButtonGroup>
      </Card>
      </Tilt>

      {/* Modal for detailed view */}
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <h2>{project.title}</h2>
            <IconContainer style={{ height: "250px", fontSize: "120px", marginBottom: "20px" }}>
              {getProjectIcon()}
            </IconContainer>
            <p>{project.description}</p>
            <Tags>
              {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
            <Members>
              {project.members?.map((member, index) => (
                <Avatar key={index} src={member.img} />
              ))}
            </Members>
            <ButtonGroup style={{ marginTop: "20px" }}>
              <ProjectButton href={project.github || "#"} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                GitHub
              </ProjectButton>
              {project.demo && (
                <ProjectButton href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  Live Demo
                </ProjectButton>
              )}
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ProjectCards;
