import React from "react";
import styled from "styled-components";
import Animated from "./Animated.jsx";

// Styling for the Header container
const HeaderContainer = styled.header`
  text-align: center;
  padding: 100px 20px;
  background-color: ${(props) =>
    props.theme === "light" ? "#f0f0f0" : "#1e1e1e"};
  color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
  transition: background-color 0.3s, color 0.3s;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => (props.theme === "light" ? "#888" : "#bbb")};
`;

function Header() {
  return (
    <HeaderContainer>
      <Name>Alexis Moreau-Avila</Name>
      <Tagline>Full Stack Developer & Problem Solver</Tagline>
    </HeaderContainer>
  );
}

export default Header;
