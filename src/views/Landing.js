import styled from "styled-components";
import Background from "../images/landing.jpg";

const Landing = () => {
  return (
    <LandingWrapper>
      <Container>
        <Text>A blog where I share my thoughts on what I am working on.</Text>
      </Container>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${Background});
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: ${({ theme }) => theme.widths.content};
`;

const Text = styled.p`
  max-width: 50%;
  color: white;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 1.5;
`;

export default Landing;
