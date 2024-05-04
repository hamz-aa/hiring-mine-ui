import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 3em;
  font-size: 1.6rem;
`;

const Logo = styled.img`
  height: 36px;
`;

const Menu = styled.ul`
  display: flex;
  gap: 20px;

  & > li:last-child {
    color: rgb(55, 40, 183);
    margin-left: 15px;
  }

  & > li:not(.active) {
    color: lightgray;
  }
`;

const ThemeChanger = styled.div``;

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
      <ThemeChanger>Toggle</ThemeChanger>
    </Container>
  );
};

export default Navbar;
