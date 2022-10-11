import React from "react";
import PageContainer from "@root/components/PageContainer";
import { GetStaticProps } from "next";
import { getRecentPosts, Post } from "@root/lib/api";
import PostList from "@root/components/post/PostList";

interface Props {
  posts: Post[];
}

const HomePage: React.FC<Props> = ({ posts }) => {
  return (
    <PageContainer>
      <h2>Hi!</h2>
      <p>
        My name's Lucas, and this is my little corner of the World Wide Web.
      </p>
      <p>
        This site has a mix of coding projects and photography. Eventually I'll
        probably add some more thought-based coding blog posts too. Just waiting
        for genius to strike. Click the links to see what you want to see.
      </p>

      <h2>Recent Posts</h2>
      <PostList posts={posts} />
    </PageContainer>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = getRecentPosts();
  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
