import styled from "styled-components";
import BasicBtn from "../components/elements/BasicBtn";
import Background from "../images/landing.jpg";

const Landing = () => {
  return (
    <LandingWrapper>
      <Container>
        <Card>
          <Text>A blog where I share my thoughts on what I am working on.</Text>
          <div>
            <BasicBtn to="/signup" text="Sign Up" />
            <BasicBtn to="/login" text="Log In" primary />
          </div>
        </Card>
      </Container>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.main`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url(${Background});
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20vh;
  align-items: center;
  height: 100%;
  max-width: ${({ theme }) => theme.widths.content};
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
