import React from "react";
import { getAllTags, getPostsByTag, Post } from "@root/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import PageContainer from "@root/components/PageContainer";
import PostList from "@root/components/post/PostList";

interface Props {
  tag: string;
  posts: Post[];
}

type RouteParams = {
  tag: string;
};

const PostTagPage: React.FC<Props> = ({ tag, posts }) => (
  <PageContainer>
    <h1>Tag: {tag}</h1>
    <PostList posts={posts} />
  </PageContainer>
);

export const getStaticProps: GetStaticProps<Props, RouteParams> = ({
  params,
}) => {
  const tag = params!.tag;
  const posts = getPostsByTag(tag);
  return { props: { tag, posts } };
};

export const getStaticPaths: GetStaticPaths<RouteParams> = () => {
  const tags = getAllTags();
  return { paths: tags.map((tag) => `/tags/${tag}`), fallback: false };
};

export default PostTagPage;
