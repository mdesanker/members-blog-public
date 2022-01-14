import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchAllPosts, fetchPostById } from "../../store/slices/postsSlice";
import BlogPostCard from "./BlogPostCard";
import Title from "../elements/Title";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

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
    dispatch(fetchAllPosts());
    dispatch(fetchPostById({ id: "61e0d57d1680fe1d92ccd641" }));
  }, []);

  return (
    <DashboardWrapper>
      <Title>Posts</Title>
      <PostContainer>
        {posts.length > 0 &&
          posts.map((post) => {
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
