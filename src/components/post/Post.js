import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchPostById, togglePostLike } from "../../store/slices/postsSlice";
import { DateTime } from "luxon";
import CommentSection from "./CommentSection";
import { useState } from "react";

const Post = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const { user } = useSelector((state) => state.user);

  const [userLike, setUserLike] = useState(false);

  const likeHandler = () => {
    console.log("Handler running");
    dispatch(togglePostLike({ id: id, user: user }));
  };

  useEffect(() => {
    if (post) {
      setUserLike(post.likes.includes(user._id));
    }
  }, [post]);

  useEffect(() => {
    dispatch(fetchPostById({ id: id }));
  }, []);

  const dateFormat =
    post && DateTime.fromISO(post.date).toLocaleString(DateTime.DATE_MED);

  return (
    <PostWrapper>
      <Container>
        <PostTitle>{post && post.title}</PostTitle>
        <PostDetails>
          <DetailSection>
            <PostAuthor>{post && post.author.username}</PostAuthor>
            <PostDate>{post && dateFormat}</PostDate>
          </DetailSection>
          <PostLikes liked={userLike} onClick={likeHandler}>
            {post && post.likes.length}
            <i className="far fa-thumbs-up" />
          </PostLikes>
        </PostDetails>
        <PostContent>{post && post.content}</PostContent>
        <CommentSection />
      </Container>
    </PostWrapper>
  );
};

const PostWrapper = styled.main``;

const Container = styled.section`
  width: 80%;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
`;

const PostTitle = styled.h1`
  padding: 1.5rem 0;
  text-align: left;
  font-weight: bold;
`;

const PostDetails = styled.div`
  padding: 1rem 0;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PostAuthor = styled.p`
  font-weight: bold;
`;

const PostDate = styled.p`
  color: gray;
`;

const PostLikes = styled.button`
  font-size: 1rem;
  // color: gray
  color: ${({ liked }) => (liked ? "blue" : "gray")};
  padding: 0.5rem 1rem;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const PostContent = styled.p`
  margin: 30px 0 50px;
  line-height: 1.5;
  text-align: justify;
`;

export default Post;
