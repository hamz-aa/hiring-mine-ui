import { PersonSearchOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  padding: 1em 2.4em;
`;

const Title = styled.h1`
  background: linear-gradient(180deg, #4d3bdb 0%, #9747ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 6.4rem;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
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
  width: 90%;
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

const SubHeading = styled.h3``;
const SubButtons = styled.ul``;

const Landing = () => {
  return (
    <Container>
      <Title>
        Dig. Apply <br /> Prepare Your Future
      </Title>
      <Text>
        Hiring Mine connects employer and job seekers, where employers are the
        source of the <br /> resources and the job seeker can find and apply for
        their targeted job.
      </Text>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <InputBox>
          <Input placeholder="Search by Role or Keyword" />
          <PersonSearchOutlined
            style={{ fontSize: "2rem", marginLeft: "3px", color: "#6851ff" }}
          />
        </InputBox>
        <Button>Find Jobs</Button>
      </div>
      <SubHeading>Popular Searches</SubHeading>
      <SubButtons>
        <li>Software</li>
        <li>Software</li>
        <li>Software</li>
        <li>Software</li>
        <li>Software</li>
        <li>Software</li>
        <li>Software</li>
        <li>Software</li>
        <li>Software</li>
      </SubButtons>
    </Container>
  );
};

export default Landing;
