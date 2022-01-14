import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchPostById } from "../../store/slices/postsSlice";

const Post = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  console.log(post);

  useEffect(() => {
    dispatch(fetchPostById({ id: id }));
  }, []);

  return <PostWrapper>Post</PostWrapper>;
};

const PostWrapper = styled.main``;

export default Post;
