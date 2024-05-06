import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import Landing from "./components/Landing";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${({ theme }) => theme.bgImage};
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );

  localStorage.setItem("darkMode", darkMode);

  return (
    <>
      <ThemeProvider theme={darkMode === true ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Landing />
        <Img src="assets/landing-img.png" />
      </ThemeProvider>
    </>
  );
}

export default App;
