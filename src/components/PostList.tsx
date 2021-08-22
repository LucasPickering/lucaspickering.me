import { formatDate } from "@root/lib/utils";
import React from "react";
import { Post } from "@root/lib/api";
import styles from "@root/styles/PostList.module.css";
import ImageOpt from "./ImageOpt";

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <div key={post.slug}>
        <div className={styles.postTitleGroup}>
          <h3 className={styles.postTitle}>
            <a href={`/posts/${post.slug}`}>{post.metadata.title}</a>
          </h3>
          <span className={styles.postDate}>
            {formatDate(post.metadata.date)}
          </span>
        </div>

        <ImageOpt className={styles.banner} publicId={post.metadata.banner} />
        <p className={styles.postSummary}>{post.metadata.summary}</p>
      </div>
    ))}
  </>
);

export default PostList;
