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
    <h1>Photo Essays</h1>
    <p>
      Just some thoughts I've jotted down about various photographic journeys of
      mine.
    </p>
    <PostList posts={posts} />
  </PageContainer>
);

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      posts: getPostsByTag("photo"),
    },
  };
};

export default PostTagPage;
