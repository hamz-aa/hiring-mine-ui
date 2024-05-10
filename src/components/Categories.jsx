import styled from "styled-components";

const Container = styled.div`
  padding: 6em 2.4em 2em 2.4em;
`;

const Heading = styled.h2`
  font-size: 4.8rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text};

  & > span {
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  row-gap: 35px;
  padding: 5em 2em 2em 2em;
`;

const Card = styled.div`
  border: 2px solid ${({ theme }) => theme.textPrimary};
  background-color: ${({ theme }) => theme.bg};
  border-radius: 16px;
  padding: 16px 26px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > *:first-child {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 2.5rem;
  }

  &:hover {
    box-shadow: rgba(104, 81, 255, 0.4) 0px 5px 15px;
    transition: all 0.6s ease;
  }
`;

const SubHeading = styled.h5`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const SubText = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  line-height: 2.5rem;
`;

const Categories = () => {
  return (
    <Container>
      <Heading>
        <span>Countless Career Options </span> Are Waiting For You To Explore
      </Heading>
      <CardWrapper>
        <Card>
          <img src="icons/art-icon.svg" alt="" />
          <SubHeading>Development</SubHeading>
          <SubText>120 Jobs</SubText>
        </Card>
        <Card>
          <img src="icons/art-icon.svg" alt="" />
          <SubHeading>Marketing & Sales</SubHeading>
          <SubText>120 Jobs</SubText>
        </Card>
        <Card>
          <img src="icons/art-icon.svg" alt="" />
          <SubHeading>Art & Illustration</SubHeading>
          <SubText>120 Jobs</SubText>
        </Card>
        <Card>
          <img src="icons/art-icon.svg" alt="" />
          <SubHeading>Animation</SubHeading>
          <SubText>120 Jobs</SubText>
        </Card>
        <Card>
          <img src="icons/art-icon.svg" alt="" />
          <SubHeading>HR & Finance</SubHeading>
          <SubText>120 Jobs</SubText>
        </Card>
        <Card>
          <img src="icons/art-icon.svg" alt="" />
          <SubHeading>Management</SubHeading>
          <SubText>120 Jobs</SubText>
        </Card>
        <Card>
          <img src="icons/art-icon.svg" alt="" />
          <SubHeading>SEO</SubHeading>
          <SubText>120 Jobs</SubText>
        </Card>
        <Card>
          <img src="icons/art-icon.svg" alt="" />
          <SubHeading>Call Center</SubHeading>
          <SubText>120 Jobs</SubText>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default Categories;
