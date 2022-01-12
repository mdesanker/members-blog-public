import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>mdesanker © 2022</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.heights.footer};
  background-color: white;
  position: absolute;
  bottom: 0;
`;

export default Footer;
