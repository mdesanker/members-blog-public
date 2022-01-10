import styled from "styled-components";
import LinkBtn from "../components/elements/LinkBtn";
import ContentContainer from "../components/elements/ContentContainer";
import Background from "../images/landing.jpg";

const Landing = () => {
  return (
    <LandingWrapper>
      <LandingContainer>
        <Card>
          <Text>A blog where I share my thoughts on what I am working on.</Text>
          <div>
            <LinkBtn to="/signup" text="Sign Up" />
            <LinkBtn to="/login" text="Log In" primary="true" />
          </div>
        </Card>
      </LandingContainer>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.main`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url(${Background});
  background-size: cover;
  background-position: center;
`;

const LandingContainer = styled(ContentContainer)`
  padding-top: 20vh;
`;

const Card = styled.div`
  max-width: 50%;
  padding: 1rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.large};

  & div {
    display: flex;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.darkblue};
  text-align: center;
  line-height: 1.5;
  margin: 0.5rem 0;
`;

export default Landing;
