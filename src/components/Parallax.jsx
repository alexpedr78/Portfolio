import React from "react";
import styled from "styled-components";

// Parallax wrapper for the background effect
const ParallaxWrapper = styled.div`
  background-image: url("your-parallax-background.jpg"); /* Replace with your image */
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// Wrapper for content that sits on top of the parallax background
const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 20px;
  color: white; /* Adjust text color for better visibility */
`;

const Parallax = ({ children }) => {
  return (
    <ParallaxWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </ParallaxWrapper>
  );
};

export default Parallax;
