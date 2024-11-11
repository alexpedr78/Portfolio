import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: rgb0;
`;
// background-color: ${(props) =>
//   props.theme === "light" ? "#f0f0f0" : "#1e1e1e"};
// transition: background-color 0.3s;

const AboutText = styled.div`
  max-width: 800px;
  border: 1px solid ${(props) => (props.theme === "light" ? "#ddd" : "#444")};
  padding: 30px;
  border-radius: 12px;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 20px;
  }

  span {
    font-weight: bold;
    color: ${(props) => (props.theme === "light" ? "#007bff" : "#76c7c0")};
  }
`;

function About() {
  return (
    <AboutSection id="about">
      <AboutText>
        <h3>About Me</h3>
        <p>
          I’m a passionate developer with a focus on building dynamic, scalable
          web applications. Specializing in modern web technologies like React
          and React Native, I'm always eager to learn and driven to create
          solutions that are both efficient and impactful.
        </p>
        <p>
          A big traveler, I’ve visited many countries and speak three languages
          fluently. Open-minded and curious, I bring a wealth of diverse
          experiences to my work and personal life.
        </p>
      </AboutText>
    </AboutSection>
  );
}

export default About;
