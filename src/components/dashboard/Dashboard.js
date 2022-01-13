import styled from "styled-components";
import ContentContainer from "../elements/ContentContainer";
import BlogPostCard from "../elements/BlogPostCard";
import Title from "../elements/Title";

const Dashboard = () => {
  const post = {
    id: "sdgho39",
    author: "Michael",
    title: "Post Title",
    content:
      "It's important that we only try to fetch the list of posts once. If we do it every time the <PostsList> component renders, or is re-created because we've switched between views, we might end up fetching the posts several times. We can use the posts.status enum to help decide if we need to actually start fetching, by selecting that into the component and only starting the fetch if the status is 'idle'.",
    likes: 27,
    date: "Jan 13, 2022",
  };

  return (
    <DashboardWrapper>
      <Title>Posts</Title>
      <ContentContainer>
        <BlogPostCard post={post} />
      </ContentContainer>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.main``;

export default Dashboard;
