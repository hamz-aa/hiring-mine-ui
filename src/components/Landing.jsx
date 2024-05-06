import { PersonSearchOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  padding: 1em 2.4em;
  width: 70%;
`;

const Title = styled.h1`
  background: linear-gradient(180deg, #4d3bdb 0%, #9747ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 6.4rem;
  margin-top: 7.5rem;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  line-height: 3rem;
  margin-block: 2rem;
`;

const InputBox = styled.div`
  width: 580px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.border};
  outline: 2px solid transparent;
  border-radius: 4px;
  display: flex;
  align-items: center;

  &:hover {
    border: 1px solid black;
  }

  &:has(input:focus) {
    border: 1px solid transparent;
    outline: 2px solid ${({ theme }) => theme.textPrimary};
  }
`;

const Input = styled.input`
  border: none;
  background: transparent;
  height: 100%;
  width: 93%;
  padding: 0 0.8em;
  font-size: 1.6rem;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  height: 38px;
  padding: 0 2.35em;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.textPrimary};
  color: white;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  cursor: pointer;

  &:hover {
    transition: background-color 0.25s ease-in-out;
    background-color: #4838b2;
  }
`;

const SubHeading = styled.h3`
  background: linear-gradient(180deg, #4d3bdb 0%, #9747ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 3rem;
  margin-block: 2rem;
`;

const SubButtons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.4rem;
  gap: 15px;
  padding: 0;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 700;

  & > li {
    height: 38px;
    padding: 0 1em;
    border: 1px solid rgba(104, 81, 255, 0.5);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      border: 1px solid ${({ theme }) => theme.textPrimary};
      background-color: ${({ theme }) => theme.btnHover};
      transition: border, background-color 0.2s ease-in-out;
    }
  }
`;

const Landing = () => {
  return (
    <Container>
      <Title>
        Dig. Apply <br /> Prepare Your Future
      </Title>
      <Text>
        Hiring Mine connects employer and job seekers, where employers are the
        source of the resources and the job seeker can find and apply for their
        targeted job.
      </Text>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <InputBox>
          <Input placeholder="Search by Role or Keyword" />
          <PersonSearchOutlined
            style={{ fontSize: "2rem", marginLeft: "10px", color: "#6851ff" }}
          />
        </InputBox>
        <Button>Find Jobs</Button>
      </div>
      <SubHeading>Popular Searches</SubHeading>
      <SubButtons>
        <li>Software</li>
        <li>Developer</li>
        <li>Backend</li>
        <li>React</li>
        <li>Node</li>
        <li>React Native</li>
        <li>Flutter</li>
        <li>UI/UX</li>
        <li>Designer</li>
        <li>Web</li>
        <li>SEO</li>
        <li>Marketing</li>
        <li>Writer</li>
      </SubButtons>
    </Container>
  );
};

export default Landing;
