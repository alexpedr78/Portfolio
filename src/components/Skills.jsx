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

function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillsGrid>
        <SkillBadge>React</SkillBadge>
        <SkillBadge>Node.js</SkillBadge>
        <SkillBadge>JavaScript</SkillBadge>
        <SkillBadge>HTML/CSS</SkillBadge>
        <SkillBadge>Git</SkillBadge>
        {/* Add more skills as needed */}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
