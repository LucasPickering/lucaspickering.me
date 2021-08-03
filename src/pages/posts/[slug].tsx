import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Post, getPostSlugs, getPostBySlug } from "@root/lib/api";
import { markdownToReact } from "@root/lib/utils";
import PostView from "@root/components/PostView";

interface Props {
  post: Post;
}

const PostPage: React.FC<Props> = ({ post }) => (
  <PostView post={post}>{markdownToReact(post.markdown)}</PostView>
);

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = await getPostBySlug(params?.slug?.toString() ?? "");

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
};

export default PostPage;
