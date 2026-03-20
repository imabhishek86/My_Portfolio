import React from "react";
import styled from "styled-components";
import { achievements, certifications } from "./constants";
import { FaCode, FaTrophy, FaCertificate, FaCloud, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
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
`;

const Title = styled.div`
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

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 50px 4px rgba(133, 76, 230, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
`;

const CardTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary + 10};
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  margin-top: 2px;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const iconMap = {
  FaCode: <FaCode />,
  FaTrophy: <FaTrophy />,
  FaCertificate: <FaCertificate />,
  FaCloud: <FaCloud />,
};

const Achievements = () => {
  return (
    <Container id="achievements">
      <Wrapper>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Title>Achievements & Certifications</Title>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Desc>
            Here are some of my significant achievements and professional certifications.
          </Desc>
        </motion.div>
        
        <CardContainer>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <Card>
              <CardTitle>Achievements</CardTitle>
              <ItemList>
                {achievements.map((item, index) => (
                  <Item key={index}>
                    <IconWrapper>{iconMap[item.icon]}</IconWrapper>
                    <ItemContent>
                      <ItemTitle>{item.title}</ItemTitle>
                      {item.link && (
                        <ViewButton href={item.link} target="_blank" rel="noreferrer">
                          View Profile <FaExternalLinkAlt size={12} />
                        </ViewButton>
                      )}
                    </ItemContent>
                  </Item>
                ))}
              </ItemList>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <Card>
              <CardTitle>Certifications</CardTitle>
              <ItemList>
                {certifications.map((item, index) => (
                  <Item key={index}>
                    <IconWrapper>{iconMap[item.icon]}</IconWrapper>
                    <ItemContent>
                      <ItemTitle>{item.title}</ItemTitle>
                      {item.link && (
                        <ViewButton href={item.link} target="_blank" rel="noreferrer">
                          View Certificate <FaExternalLinkAlt size={12} />
                        </ViewButton>
                      )}
                    </ItemContent>
                  </Item>
                ))}
              </ItemList>
            </Card>
          </motion.div>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Achievements;
