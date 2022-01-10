import styled, { css } from "styled-components";

const BasicBtn = ({ text, onClick, primary, secondary }) => {
  return (
    <ButtonWrapper onClick={onClick} primary={primary} secondary={secondary}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mediumblue};
  background-color: transparent;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.mediumblue};
  border-radius: 3px;
  margin: 0.5rem;
  cursor: pointer;

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

export default BasicBtn;
