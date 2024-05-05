import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${({ theme }) => theme.bgImage};
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </>
  );
}

export default App;
