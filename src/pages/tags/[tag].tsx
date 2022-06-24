import React from "react";
import { getAllTags, getPostsByTag, Post } from "@root/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import PageContainer from "@root/components/PageContainer";
import PostList from "@root/components/post/PostList";
import { assertIsDefined } from "@root/lib/utils";

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
  assertIsDefined(params);
  return {
    props: {
      tag: params.tag,
      posts: getPostsByTag(params.tag),
    },
  };
};

export const getStaticPaths: GetStaticPaths<RouteParams> = () => {
  const tags = getAllTags();
  return { paths: tags.map((tag) => `/tags/${tag}`), fallback: false };
};

export default PostTagPage;
