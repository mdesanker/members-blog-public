import styled from "styled-components";
import { DateTime } from "luxon";

const Comment = ({ comment }) => {
  const { author, content, date } = comment;

  const dateFormat = DateTime.fromISO(date).toLocaleString(
    DateTime.DATETIME_MED
  );

  return (
    <CommentWrapper>
      <CommentHeader>
        <Author>{author.username}</Author>
        <Date>{dateFormat}</Date>
      </CommentHeader>
      <ContentContainer>
        <Content>{content}</Content>
        <DeleteBtn>
          <i className="far fa-trash-alt" />
        </DeleteBtn>
      </ContentContainer>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 0.5rem;
`;

const Author = styled.p`
  font-weight: bold;
`;

const Date = styled.p`
  color: gray;
  font-size: 0.9rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.p`
  flex-grow: 1;
`;

const DeleteBtn = styled.button`
  font-size: 0.9rem;
  color: lightgray;
  padding: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    color: rgba(255, 0, 0, 0.4);
  }
`;

export default Comment;
