import styled from "styled-components";

const FormSmallText = styled.p`
  font-size: 0.8rem;
  text-align: center;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mediumblue};
  }
`;

export default FormSmallText;
