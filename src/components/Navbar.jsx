/* eslint-disable react/prop-types */
import { DarkMode, LightModeOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2em 1.6em;
  font-size: 1.6rem;
`;

const Logo = styled.img`
  height: 36px;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  gap: 20px;
  margin-right: 50px;
  color: ${({ theme }) => theme.text};

  & > li {
    cursor: pointer;
  }

  & > li:last-child {
    color: rgb(55, 40, 183);
    margin-left: 15px;
  }

  & > li:not(.active) {
    color: lightgray;
  }
`;

const ThemeChanger = styled.div`
  background-color: #aab4be;
  width: 40px;
  height: 20px;
  border-radius: 15px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;

  & > * {
    color: #fff;
    border-radius: 50%;
    padding: 0.2em;
    position: absolute;
    top: -5px;
  }

  & > .light-mode {
    background-color: #001e3c;
    left: -5px;
  }

  & > .dark-mode {
    background-color: #003892;
    color: #fff;
    right: -5px;
  }
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Logo src="assets/Hiring-Mine-Logo.png" />
      <Menu>
        <li>About Us</li>
        <li>People</li>
        <li className="active">Jobs</li>
        <li>Login</li>
        <li>Join Now</li>
        <li className="active">Employee / Post Job</li>
      </Menu>
      <ThemeChanger onClick={() => setDarkMode(!darkMode)}>
        {darkMode === true ? (
          <DarkMode className="dark-mode" style={{ fontSize: "3rem" }} />
        ) : (
          <LightModeOutlined
            className="light-mode"
            style={{ fontSize: "3rem" }}
          />
        )}
      </ThemeChanger>
    </Container>
  );
};

export default Navbar;
