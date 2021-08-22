import React from "react";
import PageContainer from "@root/components/PageContainer";
import { GetStaticProps } from "next";
import { getAllPosts, Post } from "@root/lib/api";
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
        On occasion, my brain cells align long enough to form what some might
        call "a thought". And sometimes, these momentary neural eclipses last
        long enough for me to capture them in digital form. So welcome to my
        brain's galaxy! Much like the Milky Way, it's mostly vacuous.
      </p>

      <h2>Recent Posts</h2>
      <PostList posts={posts} />
    </PageContainer>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
