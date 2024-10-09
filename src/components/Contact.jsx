import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  text-align: center;
  padding: 50px 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  a {
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;
  }
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <SocialLinks>
        <a href="https://github.com/alexpedr78">GitHub</a>
        <a href="https://www.linkedin.com/in/alexis-moreau-avila/">LinkedIn</a>
        <a href="mailto:alexismoreauavila@gmail.com">Email</a>
      </SocialLinks>
    </ContactSection>
  );
}

export default Contact;
