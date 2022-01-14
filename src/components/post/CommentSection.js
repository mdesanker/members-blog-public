import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCommentsByPostId } from "../../store/slices/commentsSlice";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const CommentSection = () => {
  const { id } = useParams();

  const [formVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch();
  const { comments, commentCount } = useSelector((state) => state.comments);
  console.log(comments);

  const toggleFormHandler = () => {
    setFormVisible(!formVisible);
  };

  useEffect(() => {
    dispatch(fetchCommentsByPostId({ id: id }));
  }, []);

  return (
    <CommentsWrapper>
      <CommentHeader>
        <h1>Comments ({comments && commentCount})</h1>
        <AddCommentBtn onClick={toggleFormHandler}>
          <i className="fas fa-plus" />
          Leave a Comment
        </AddCommentBtn>
      </CommentHeader>
      {formVisible && <NewCommentForm toggleForm={toggleFormHandler} />}
      <CommentContainer>
        {comments.length === 0 && <p>No comments yet</p>}
        {comments &&
          comments.map((comment) => {
            return <Comment key={comment._id} comment={comment} />;
          })}
      </CommentContainer>
    </CommentsWrapper>
  );
};

const CommentsWrapper = styled.section``;

const CommentHeader = styled.div`
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddCommentBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.mediumblue};
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.5rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.mediumblue};
  border-radius: 5px;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    color: ${({ theme }) => theme.colors.darkblue};

    border: 2px solid ${({ theme }) => theme.colors.darkblue};
  }
`;

const CommentContainer = styled.div`
  padding: 1rem 0;
`;

export default CommentSection;
