import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
    background-color: ${(props) =>
      props.theme === "light" ? "#f4f4f9" : "#333"};
    color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */
  }

  button {
    margin: 20px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: ${(props) =>
      props.theme === "light" ? "#007bff" : "#555"};
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s; /* Smooth transition */
  }

  h1, h2 {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2.5rem;
    color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
    margin-bottom: 20px;
    text-align: center;
    transition: color 0.3s;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  section {
    margin: 40px 0;
    width: 100%;
  }
`;

export default GlobalStyle;
