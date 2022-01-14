import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCommentsByPostId } from "../../store/slices/commentsSlice";
import Comment from "./Comment";

const CommentSection = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  console.log(comments.comments);

  useEffect(() => {
    dispatch(fetchCommentsByPostId({ id: id }));
  }, []);

  return (
    <CommentsWrapper>
      <CommentHeader>
        Comments ({comments && comments.commentCount})
      </CommentHeader>
      <CommentContainer>
        {comments.comments.length === 0 && <p>No comments yet</p>}
        {comments &&
          comments.comments.map((comment) => {
            return <Comment key={comment._id} comment={comment} />;
          })}
      </CommentContainer>
    </CommentsWrapper>
  );
};

const CommentsWrapper = styled.section``;

const CommentHeader = styled.h1`
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const CommentContainer = styled.div`
  padding: 1rem 0;
`;

export default CommentSection;
