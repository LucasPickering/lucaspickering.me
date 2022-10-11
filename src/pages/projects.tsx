import React from "react";
import { getPostsByTag, Post } from "@root/lib/api";
import { GetStaticProps } from "next";
import PageContainer from "@root/components/PageContainer";
import PostList from "@root/components/post/PostList";

interface Props {
  posts: Post[];
}

const PostTagPage: React.FC<Props> = ({ posts }) => (
  <PageContainer>
    <h1>Code Projects</h1>
    <p>
      I like to tinker with a lot of different software projects. Usually
      they're born from some simple practical need, or a dream-fueled fantasy of
      majestic landscapes. I'll let you guess which are which. Most of these are
      publicly available; click the post to find the link.
    </p>
    <PostList posts={posts} />
  </PageContainer>
);

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      posts: getPostsByTag("project"),
    },
  };
};

export default PostTagPage;
