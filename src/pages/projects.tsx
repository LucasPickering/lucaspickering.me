import React from "react";
import { GetStaticProps } from "next";
import { getPostsByTag, Post } from "@root/lib/api";
import PageContainer from "@root/components/PageContainer";
import PostList from "@root/components/PostList";

interface Props {
  posts: Post[];
}

const ProjectsPage: React.FC<Props> = ({ posts }) => (
  <PageContainer>
    <h1>Nerd Projects</h1>
    <PostList posts={posts} />
  </PageContainer>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPostsByTag("project");
  return {
    props: {
      posts,
    },
  };
};

export default ProjectsPage;
