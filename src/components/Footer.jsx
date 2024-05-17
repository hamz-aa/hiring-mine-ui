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
        <SubHeading>Follow Us</SubHeading>
        <SocialMediaIcons></SocialMediaIcons>
      </Left>
      <Right>
        <BoldText>Contact Us</BoldText>
        <EmailContent>portal.hiringmine@gmail.com</EmailContent>
      </Right>
      <Hr />
      <Text>Privacy Policy</Text>
      <Text>Copyright Hiringmine 2024. All Rights Reserved</Text>
    </Container>
  );
};

export default Footer;
