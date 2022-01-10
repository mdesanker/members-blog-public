import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo>Scratch</Logo>
        <NavBar>
          <ul>
            <li>Sign Up</li>
            <li>Log In</li>
          </ul>
        </NavBar>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.large};
  height: 60px;
  position: fixed;
  top: 0;
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
  text-decoration: line-through;
`;

const NavBar = styled.nav`
  & ul {
    display: flex;
    gap: 1rem;
  }

  & ul li {
    list-style: none;
  }
`;

export default Header;
