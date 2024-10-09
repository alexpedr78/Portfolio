import React from "react";
import GlobalStyle from "./Global-Style.jsx";
import Header from "./components/Headers.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import styled from "styled-components";
import { ThemeProvider, useTheme } from "./components/Dark/LightMode.jsx";
import Parallax from "./components/Parallax.jsx";

// Styled button with dynamic theme-based colors
const StyledButton = styled.button`
  margin: 20px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme === "light" ? "#007bff" : "#555"};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#f4f4f9")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#0056b3" : "#333"};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function AppContent() {
  const { theme, toggleTheme } = useTheme(); // Access the current theme and toggle function

  return (
    <>
      <GlobalStyle theme={theme} /> {/* Apply global styles based on theme */}
      <StyledButton onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </StyledButton>
      <Container>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Container>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
