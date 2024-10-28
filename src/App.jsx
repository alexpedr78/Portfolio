import React from "react";
import GlobalStyle from "./Global-Style.jsx";
import Header from "./components/Headers.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import styled from "styled-components";
import { ThemeProvider, useTheme } from "./components/Dark/LightMode.jsx";
import { useEffect, useState } from "react";

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
  position: relative;
  z-index: 1;
  min-height: 100vh; // Add this line
`;

const Section = styled.div`
  min-height: ${(props) => props.height || "100vh"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3em;
  text-align: center;
`;
const ParallaxBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 300vh; // Changed from 120% to 100vh
  background-image: url("/stars.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; // Add this line
  z-index: 0;
  transform: ${(props) => `translateY(${props.offset}px)`};
  transition: transform 0.1s ease-out;
`;
const EmptySection = styled.div`
  min-height: 80vh; // You can adjust this value for more or less space
`;

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the division factor (2) to control the parallax speed
      // Higher number = slower movement
      const offset = window.scrollY / 3;
      setScrollOffset(-offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Container theme={theme}>
        {/* <StyledButton onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </StyledButton> */}
        <Section height="80vh">
          <Header />
        </Section>
        <EmptySection></EmptySection>
        <Section height="80vh">
          <About />
        </Section>
        <Section height="80vh">
          <Projects />
        </Section>

        <Section height="80vh">
          <Skills />
        </Section>

        <Section height="80vh">
          <Contact />
        </Section>
      </Container>
      <ParallaxBackground offset={scrollOffset} />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
