import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LinkBtn = ({ text, to, primary }) => {
  return (
    <LinkWrapper to={to} primary={primary}>
      {text}
    </LinkWrapper>
  );
};

const LinkWrapper = styled(Link)`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mediumblue};
  background-color: transparent;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.mediumblue};
  border-radius: 5px;
  margin: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.mediumblue};
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: ${({ theme }) => theme.colors.mediumblue};
      // color: ${({ theme }) => theme.colors.darkblue};
      color: white;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.mediumblue};
      }
    `}
`;

export default LinkBtn;
