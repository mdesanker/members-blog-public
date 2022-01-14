import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCommentsByPostId } from "../../store/slices/commentsSlice";

const Comments = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchCommentsByPostId({ id: id }));
  }, []);

  return (
    <CommentsWrapper>
      <CommentHeader>Comments ({})</CommentHeader>
    </CommentsWrapper>
  );
};

const CommentsWrapper = styled.section``;

const CommentHeader = styled.h1`
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export default Comments;
