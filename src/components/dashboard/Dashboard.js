import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchAllPosts, fetchPostById } from "../../store/slices/postsSlice";
import BlogPostCard from "./BlogPostCard";
import Title from "../elements/Title";
import { loadUser } from "../../store/slices/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(fetchAllPosts());
  }, []);

  return (
    <DashboardWrapper>
      <Title>Posts</Title>
      <PostContainer>
        {posts.length > 0 &&
          posts
            .filter((post) => post.publish === true)
            .map((post) => {
              return <BlogPostCard key={post._id} post={post} />;
            })}
      </PostContainer>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.main``;

const PostContainer = styled.div`
  margin: 40px auto 0;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
`;

export default Dashboard;
