import styled from "styled-components";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  const { id, title, author, content, date, likes } = post;

  return (
    <PostWrapper to={`/dashboard/${id}`}>
      <PostCard>
        <PostTitle>{title}</PostTitle>
        <PostAuthor>{author}</PostAuthor>
        <PostDetails>
          <p>{date}</p>
          <p>{likes} likes</p>
        </PostDetails>
        <ContentSample>{content}</ContentSample>
      </PostCard>
    </PostWrapper>
  );
};

const PostWrapper = styled(Link)`
  text-decoration: none;
  color: black;
  margin-bottom: 2rem;
`;

const PostCard = styled.div`
  background-color: white;
  padding: 10px 12px 16px;
  min-width: 300px;
  width: 35vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? `${props.margin}` : "0")};
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const PostTitle = styled.h2`
  font-weight: 100;
  text-align: center;
  padding-bottom: 0.5rem;
`;

const PostAuthor = styled.p`
  // padding-bottom: 0.5rem;
`;

const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
  padding-bottom: 0.5rem;
`;

const ContentSample = styled.p`
  color: rgb(52, 52, 52);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export default BlogPostCard;
