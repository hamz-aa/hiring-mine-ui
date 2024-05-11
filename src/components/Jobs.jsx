import styled from "styled-components";
import Card from "./Card";

const Container = styled.div``;

const Heading = styled.h2``;

const CardWrapper = styled.div``;

const Jobs = () => {
  return (
    <Container>
      <Heading>
        <span>Latest And Top</span> Job Openings
      </Heading>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </Container>
  );
};

export default Jobs;
