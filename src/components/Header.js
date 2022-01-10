import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo>Scratch</Logo>
        <NavBar>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
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
  color: ${({ theme }) => theme.colors.darkblue};
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

  & ul li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkblue};
  }

  & ul li a:hover {
    text-decoration: underline;
  }
`;

export default Header;
