import styled from "styled-components";

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

const CardWrapper = styled.div`
  background-color: white;
  padding: 10px 12px 16px;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: flex;
  flex-direction: column;
`;

export default Card;
