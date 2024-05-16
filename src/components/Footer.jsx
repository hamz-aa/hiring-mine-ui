import styled from "styled-components";

const Container = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const Logo = styled.img``;
const Text = styled.p``;
const SubHeading = styled.h5``;
const SocialMediaIcons = styled.div``;
const BoldText = styled.p``;
const EmailContent = styled.div``;
const Hr = styled.hr``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo />
        <Text></Text>
        <SubHeading></SubHeading>
        <SocialMediaIcons></SocialMediaIcons>
      </Left>
      <Right>
        <BoldText></BoldText>
        <EmailContent></EmailContent>
      </Right>
      <Hr />
      <Text></Text>
      <Text></Text>
    </Container>
  );
};

export default Footer;
