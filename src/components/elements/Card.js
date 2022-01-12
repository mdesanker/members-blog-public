import styled from "styled-components";

const Card = ({ children, margin }) => {
  return <CardWrapper margin={margin}>{children}</CardWrapper>;
};

const CardWrapper = styled.div`
  background-color: white;
  padding: 10px 12px 16px;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? `${props.margin}` : "0")};
`;

export default Card;
