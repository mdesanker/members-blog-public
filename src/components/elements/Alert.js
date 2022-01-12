import styled from "styled-components";

const Alert = ({ text, color }) => {
  return <AlertWrapper color={color}>{text}</AlertWrapper>;
};

const AlertWrapper = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 0.7rem;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  width: 90%;
  margin: 1rem;
`;

export default Alert;
