import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaCheckCircle, FaTasks, FaLeaf, FaUtensils, FaBriefcase, FaLaptopCode, FaCloudSun, FaExternalLinkAlt } from "react-icons/fa"; // Added FaGithub
import { AiOutlineClose } from "react-icons/ai"; // Keep AiOutlineClose
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import MotionWrapper from "./MotionWrapper";

// Styled Components
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-height: 4.5em;
`;


// Adjust Card Height for Responsiveness
const Card = styled.div`
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
  height: 520px;
  min-height: 520px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media only screen and (max-width: 768px) {
    width: 100%;
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
    border-color: ${({ theme }) => theme.primary};
  }
`;

const GitHubIcon = styled(FaGithub)`
  font-size: 20px;
  color: ${({ theme }) => theme.text_secondary};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.5);
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
`;

const ProjectButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  padding: 10px 12px;
  border-radius: 8px;
  background-color: transparent;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 0 15px rgba(133, 76, 230, 0.4);
  }
`;

const DetailsButton = styled.button`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  padding: 10px 12px;
  border-radius: 8px;
  background: linear-gradient(225deg, #ac50ef 0%, #705ecf 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(133, 76, 230, 0.4);
  }
`;

// Modal Components
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  backdrop-filter: blur(8px);
`;

const ModalContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.3);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #854ce6;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #854ce6;
  }
`;

const ProjectCards = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openGitHubLink = (e) => {
    e.stopPropagation();
    window.open(project.github, "_blank");
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
      return <FaGithub />;
    }
    return <FaTasks />;
  };

  return (
    <>
      <MotionWrapper>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2500} scale={1.02} glareEnable={true} glareMaxOpacity={0.3} glareColor="#854ce6" glarePosition="all" style={{ width: '100%', maxWidth: '330px' }}>
          <Card
            onClick={() => setIsModalOpen(true)}
            tabIndex={0}
          >
          <IconContainer>{getProjectIcon()}</IconContainer>
          <TitleWrapper>
            <Title>{project.title}</Title>
            <GitHubIcon onClick={openGitHubLink}></GitHubIcon>
          </TitleWrapper>
          <Date>{project.date}</Date>
          <Tags>
            {project.tags?.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Description>{project.description}</Description>
          <Members>
            {project.members?.map((member, index) => (
              <Avatar key={index} src={member.img} />
            ))}
          </Members>
          <ButtonGroup>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              <ProjectButton href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                <FaGithub size={18} /> GitHub
              </ProjectButton>
              <DetailsButton onClick={() => setIsModalOpen(true)}>
                View Details
              </DetailsButton>
            </div>
          </ButtonGroup>
        </Card>
      </Tilt>
    </MotionWrapper>

    <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <ModalContainer
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <AiOutlineClose />
              </CloseButton>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl text-accent">{getProjectIcon()}</div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                </div>

                <div className="w-full h-64 bg-accent/5 dark:bg-accent/10 rounded-xl flex items-center justify-center text-7xl text-accent shadow-inner border border-accent/20">
                  {getProjectIcon()}
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-accent/30 pb-2">Description</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-accent/30 pb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, index) => (
                      <Tag key={index} className="px-4 py-2 text-sm">{tag}</Tag>
                    ))}
                  </div>
                </div>

                {project.members && project.members.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-accent/30 pb-2">Collaborators</h3>
                    <div className="flex items-center gap-2">
                       {project.members.map((member, index) => (
                        <div key={index} className="flex items-center gap-2 bg-black/5 dark:bg-[#12122b] px-3 py-2 rounded-lg border border-accent/20">
                          <Avatar src={member.img} style={{ margin: 0 }} />
                          <span className="text-gray-700 dark:text-gray-300">{member.name || "Member"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-black/5 dark:bg-[#12122b] border border-accent rounded-xl text-gray-900 dark:text-white font-bold hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="text-xl" /> View GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent rounded-xl text-white font-bold hover:shadow-[0_0_20px_rgba(133,76,230,0.6)] transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCards;
