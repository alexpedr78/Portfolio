import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  text-align: center;
  padding: 50px 0;
`;

const SkillsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const SkillBadge = styled.span`
  background-color: #333;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
`;
const Title = styled.h2`
  color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
  font-size: 2.5rem;
  margin-bottom: 20px;
`;
function Skills() {
  return (
    <SkillsSection id="skills">
      <Title>Skills</Title>
      <SkillsGrid>
        <SkillBadge>React</SkillBadge>
        <SkillBadge>React Native</SkillBadge>
        <SkillBadge>JavaScript</SkillBadge>
        <SkillBadge>HTML/CSS</SkillBadge>
        <SkillBadge>Node.js</SkillBadge>
        <SkillBadge>Git</SkillBadge>

        <SkillBadge>MongoDB</SkillBadge>
        <SkillBadge>SQL, MySql</SkillBadge>
        <SkillBadge>AWS</SkillBadge>
        <SkillBadge>TailWind, Bootstrap, Figma</SkillBadge>
        <SkillBadge>TailWind</SkillBadge>
        <SkillBadge>Figma</SkillBadge>
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
