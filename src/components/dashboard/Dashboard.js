import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchAllPosts } from "../../store/slices/postsSlice";
import BlogPostCard from "../elements/BlogPostCard";
import Title from "../elements/Title";

const Dashboard = () => {
  const dispatch = useDispatch();

  const post = {
    id: "sdgho39",
    author: "Michael",
    title: "Post Title",
    content:
      "It's important that we only try to fetch the list of posts once. If we do it every time the <PostsList> component renders, or is re-created because we've switched between views, we might end up fetching the posts several times. We can use the posts.status enum to help decide if we need to actually start fetching, by selecting that into the component and only starting the fetch if the status is 'idle'.",
    likes: 27,
    date: "Jan 13, 2022",
  };

  useEffect(() => {
    console.log("Fetching posts...");
    dispatch(fetchAllPosts());
  }, []);

  return (
    <DashboardWrapper>
      <Title>Posts</Title>
      <PostContainer>
        <BlogPostCard post={post} />
        <BlogPostCard post={post} />
        <BlogPostCard post={post} />
        <BlogPostCard post={post} />
        <BlogPostCard post={post} />
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
