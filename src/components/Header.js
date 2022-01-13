import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { Fragment } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const authLinks = (
    <ul>
      <li>
        <Link onClick={logoutHandler} to="/">
          <i className="fas fa-sign-out-alt" /> Log Out
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
    </ul>
  );

  return (
    <HeaderWrapper>
      <Container>
        <Logo to="/">Scratch</Logo>
        <NavBar>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </NavBar>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.large};
  height: ${({ theme }) => theme.heights.header};
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

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.darkblue};
  font-size: 2rem;
  font-weight: bold;
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
