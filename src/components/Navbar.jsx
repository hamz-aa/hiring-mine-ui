import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.6em;
  font-size: 1.6rem;
`;

const Logo = styled.img`
  height: 36px;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  gap: 20px;
  margin-right: 100px;

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

  & > * {
    font-size: 2rem;
    width: 30px;
  }
`;

const Navbar = () => {
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
      <ThemeChanger>
        <LightModeOutlined className="light-mode" />
        <DarkModeOutlined className="dark-mode" />
      </ThemeChanger>
    </Container>
  );
};

export default Navbar;
