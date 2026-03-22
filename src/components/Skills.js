import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "../components/constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Tilt from "react-parallax-tilt";
import MotionWrapper from "./MotionWrapper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 2px solid #854ce6; /* Thicker accent border */
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => (theme.text_primary ? theme.text_primary + 80 : "rgba(255, 255, 255, 0.6)")};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0.1px solid #854ce6;
  background: ${({ theme }) => theme.card ? theme.card + "80" : "rgba(18, 18, 43, 0.5)"};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 0.1px solid #854ce6;
    box-shadow: 0 0 12px 2px rgba(133, 76, 230, 0.3);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const SkillCard = ({ skill }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => {
    setScale(1.02);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setScale(1);
  };

  return (
    <MotionWrapper>
      <Skill
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
      >
        <SkillTitle>{skill.title}</SkillTitle>
        <SkillList>
          {skill.skills.map((item, index) => (
            <SkillItem 
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillIconWrapper>{item.icon}</SkillIconWrapper>
              {item.name}
            </SkillItem>
          ))}
        </SkillList>
      </Skill>
    </MotionWrapper>
  );
};

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Title>Skills</Title>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Desc>
            Here are some of my skills on which I have been working for the past 2
            years.
          </Desc>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          style={{ width: "100%" }}
        >
          <SkillsContainer>
            {skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </SkillsContainer>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Skills;
