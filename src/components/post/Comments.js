import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCommentsByPostId } from "../../store/slices/commentsSlice";

const Comments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsByPostId({ id: id }));
  }, []);

  return (
    <CommentsWrapper>
      <h1>Comments</h1>
    </CommentsWrapper>
  );
};

const CommentsWrapper = styled.section``;

export default Comments;
