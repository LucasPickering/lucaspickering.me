import React from "react";
import { Post } from "@root/lib/api";
import PageContainer from "./PageContainer";
import styles from "@root/styles/PostView.module.css";
import { dateFormat } from "@root/lib/utils";
import Head from "next/head";

interface Props {
  post: Post;
}

const PostView: React.FC<Props> = ({ post, children }) => (
  <PageContainer>
    <Head>
      <title>{post.metadata.title} | Lucas Pickering</title>
    </Head>
    <article>
      <div className={styles.postHeader}>
        <h1>{post.metadata.title}</h1>
        <span className={styles.postDate}>
          {dateFormat.format(post.metadata.date)}
        </span>
      </div>
      <div className={styles.postLinks}>
        {post.metadata.links &&
          Object.entries(post.metadata.links).map(([key, href]) => (
            <a key={key} href={href}>
              {key}
            </a>
          ))}
      </div>
      <img className={styles.banner} src={post.metadata.banner} />
      <div>{children}</div>
    </article>
  </PageContainer>
);

export default PostView;
