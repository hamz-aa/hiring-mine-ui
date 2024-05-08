import styled from "styled-components";

const Container = styled.div``;

const Heading = styled.h2``;

const Text = styled.p``;

const CardWrapper = styled.div``;

const Card = styled.div``;

const SubHeading = styled.h5``;

const SubText = styled.p``;

const Details = () => {
  return (
    <Container>
      <Heading>Lorem ipsum dolor sit amet.</Heading>
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
      <CardWrapper>
        <Card>
          <i>icon</i>
          <SubHeading>sub heading</SubHeading>
          <SubText>sub text</SubText>
        </Card>
        <Card>
          <i>icon</i>
          <SubHeading>sub heading</SubHeading>
          <SubText>sub text</SubText>
        </Card>
        <Card>
          <i>icon</i>
          <SubHeading>sub heading</SubHeading>
          <SubText>sub text</SubText>
        </Card>
        <Card>
          <i>icon</i>
          <SubHeading>sub heading</SubHeading>
          <SubText>sub text</SubText>
        </Card>
      </CardWrapper>
      <Heading>Lorem ipsum dolor sit amet consectetur.</Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos.
      </Text>
    </Container>
  );
};

export default Details;
