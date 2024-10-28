import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useTheme } from "./Dark/LightMode.jsx";
import styled from "styled-components";

const ParallaxBackground = styled.div`
  width: 100vw;
  height: 120vh; /* Made taller to allow for movement */
  background-image: url(${(props) =>
    props.theme === "light" ? "/mountain.jpg" : "/stars.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

const ParallaxComponent = () => {
  const { theme } = useTheme();

  return (
    <ParallaxContainer>
      <Parallax
        speed={-15} /* Changed to speed instead of translateY */
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ParallaxBackground theme={theme} />
      </Parallax>
    </ParallaxContainer>
  );
};

export default ParallaxComponent;
