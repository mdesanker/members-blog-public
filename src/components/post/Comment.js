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
      <p>{content}</p>
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

export default Comment;
