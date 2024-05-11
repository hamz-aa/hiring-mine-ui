import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import Landing from "./components/Landing";
import Details from "./components/Details";
import Categories from "./components/Categories";
import Jobs from "./components/Jobs";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${({ theme }) => theme.bgImage};
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em 0;

  & > img {
    max-width: 250px;
    height: auto;
    display: block;
  }
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
        <Details />
        <ImgContainer>
          <Img src="assets/Dream-Job.png" />
        </ImgContainer>
        <Categories />
        <Jobs />
      </ThemeProvider>
    </>
  );
}

export default App;
