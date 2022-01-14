import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchPostById } from "../../store/slices/postsSlice";
import { DateTime } from "luxon";

const Post = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  console.log(post);

  const { title, author, date, content, likes } = post;

  const dateFormat = DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);

  useEffect(() => {
    dispatch(fetchPostById({ id: id }));
  }, []);

  return (
    <PostWrapper>
      <Container>
        <PostTitle>{post && title}</PostTitle>
        <PostDetails>
          <DetailSection>
            <PostAuthor>{post && author.username}</PostAuthor>
            <PostDate>{post && dateFormat}</PostDate>
          </DetailSection>
          <PostLikes>
            {post && likes.length}
            <i className="far fa-thumbs-up" />
          </PostLikes>
        </PostDetails>
        <PostContent>{post && content}</PostContent>
      </Container>
    </PostWrapper>
  );
};

const PostWrapper = styled.main``;

const Container = styled.div`
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
  color: gray;
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
  margin-top: 30px;
  line-height: 1.5;
  text-align: justify;
`;

export default Post;
