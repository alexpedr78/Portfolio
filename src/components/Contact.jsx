import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = styled.section`
  text-align: center;
  padding: 50px 0;
  color: ${(props) => (props.theme === "light" ? "#333" : "#333")};
`;

const Title = styled.h2`
  color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 1.2rem;
    text-decoration: none;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      background-color: #555;
      transform: translateY(-5px); // Slight lift on hover
    }

    svg {
      margin-right: 8px; // Space between icon and text
    }
  }
`;

const ContactMessage = styled.p`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #333;
  font-size: 1.1rem;
  color: #fff;
  margin-top: 10px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    transform: translateY(-5px); // Slight lift on hover
  }
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <Title>Contact Me</Title>
      {/* <ContactMessage>
        I'm open to opportunities and collaborations. Feel free to reach out
        through any of the following platforms!
      </ContactMessage> */}
      <SocialLinks>
        <a
          href="https://github.com/alexpedr78"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alexis-moreau-avila/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:alexismoreauavila@gmail.com">
          <FaEnvelope /> Email
        </a>
      </SocialLinks>
    </ContactSection>
  );
}

export default Contact;
