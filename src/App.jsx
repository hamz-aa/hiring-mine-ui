import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import Landing from "./components/Landing";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${({ theme }) => theme.bgImage};
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
      </ThemeProvider>
    </>
  );
}

export default App;
