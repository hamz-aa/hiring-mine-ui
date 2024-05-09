import {
  AccountBoxOutlined,
  SearchOutlined,
  UploadFileOutlined,
  WorkOutline,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  padding: 6em 2.4em 2em 2.4em;
`;

const Heading = styled.h2`
  font-size: 4.8rem;
  font-weight: 600;
  text-align: center;

  & > span {
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  line-height: 3rem;
  margin-block: 2rem;
  text-align: center;
  margin: 0;
`;

const CardWrapper = styled.div`
  display: flex;
`;

const Card = styled.div``;

const SubHeading = styled.h5``;

const SubText = styled.p``;

const Details = () => {
  return (
    <Container>
      <Heading>
        Get Hired In 4 <span>Quick Easy Steps (Coming Soon)</span>
      </Heading>
      <Text>
        The quickest and the most effective way to get hired by the top firm.
      </Text>
      <CardWrapper>
        <Card>
          <AccountBoxOutlined />
          <SubHeading>Create an Account</SubHeading>
          <SubText>
            Join our vibrant community. Create your account and unlock boundless
            opportunities.
          </SubText>
        </Card>
        <Card>
          <SearchOutlined />
          <SubHeading>Search a Job</SubHeading>
          <SubText>
            Discover your ideal job. Our intuitive search feature makes job
            hunting effortless.
          </SubText>
        </Card>
        <Card>
          <UploadFileOutlined />
          <SubHeading>Upload CV/Resume</SubHeading>
          <SubText>
            Showcase your expertise. Upload your CV or resume and stand out to
            employers.
          </SubText>
        </Card>
        <Card>
          <WorkOutline />
          <SubHeading>Get a Job</SubHeading>
          <SubText>
            Achieve your career goals. Apply for jobs and embark on your next
            adventure.
          </SubText>
        </Card>
      </CardWrapper>
      <Heading>
        Find Your Dream Job <span>Super Fast Ever.</span>
      </Heading>
      <Text>
        We are here to help job seekers connect with organizer and companies. We
        are provides the best opportunities to professional people.
      </Text>
    </Container>
  );
};

export default Details;
