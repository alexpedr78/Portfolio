import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: center;
  padding: 150px 20px;
  border-radius: 10px;
  background: ${(props) =>
    props.theme === "light"
      ? "linear-gradient(135deg, #f0f0f0, #e0e0e0)"
      : "linear-gradient(135deg, #1e1e1e, #333)"};
  color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
  transition: background-color 0.3s, color 0.3s;
`;

const Name = styled.h1`
  font-size: 4rem; // Increased font size for greater impact
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Tagline = styled.h2`
  font-size: 2rem; // Increased font size
  color: ${(props) => (props.theme === "light" ? "#555" : "#bbb")};
  font-weight: 300;
  margin-top: 10px;
  animation: fadeIn 1.5s ease-out;
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
