import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

// Styled container for the animated box
const AnimatedContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? "#007bff" : "#555"};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#f4f4f9")};
  border-radius: 12px;
  text-align: center;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin: 10px 0;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const AnimatedComponent = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <AnimatedContainer>
        <Heading>Welcome!</Heading>
        <Paragraph>Let's build something amazing together.</Paragraph>
      </AnimatedContainer>
    </motion.div>
  );
};

export default AnimatedComponent;
