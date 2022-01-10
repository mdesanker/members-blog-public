import styled from "styled-components";

const BasicBtn = ({ type, text, onClick }) => {
  return (
    <ButtonWrapper type={type} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.mediumblue};
  border: 2px solid ${({ theme }) => theme.colors.mediumblue};
  // border-radius: 5px;
  margin: 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.mediumblue};
    background-color: transparent;
  }
`;

export default BasicBtn;
