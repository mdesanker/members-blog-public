import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: ${({ theme }) => theme.widths.content};
  padding-top: ${({ theme }) => theme.heights.header};
  margin: 0 auto;
`;

export default ContentContainer;
