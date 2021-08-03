import React from "react";
import { GetStaticProps } from "next";
import { getPostsByTag, Post } from "@root/lib/api";
import PageContainer from "@root/components/PageContainer";
import PostList from "@root/components/PostList";

interface Props {
  posts: Post[];
}

const PhotosPage: React.FC<Props> = ({ posts }) => (
  <PageContainer>
    <h1>Photography</h1>
    <PostList posts={posts} />
  </PageContainer>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPostsByTag("photo");
  return {
    props: {
      posts,
    },
  };
};

export default PhotosPage;
