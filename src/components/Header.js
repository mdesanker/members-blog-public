import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo>Blog</Logo>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.large};
  height: 60px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

export default Header;
