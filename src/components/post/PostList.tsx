import { Post } from "@root/lib/api";
import { formatDate } from "@root/lib/utils";
import styles from "@root/styles/PostList.module.scss";
import Link from "next/link";
import React from "react";
import ImageOpt from "../ImageOpt";

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts
      // Filter out hidden posts
      .filter((post) => !post.metadata.hidden)
      .map((post) => (
        <div key={post.slug}>
          <div className={styles.postTitleGroup}>
            <h3 className={styles.postTitle}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.metadata.title}</a>
              </Link>
            </h3>
            {post.metadata.date && (
              <span className={styles.postDate}>
                {formatDate(post.metadata.date)}
              </span>
            )}
          </div>

          {post.metadata.banner && (
            <ImageOpt
              className={styles.banner}
              src={post.metadata.banner}
              width={800}
              height={240}
            />
          )}
          <p className={styles.postSummary}>{post.metadata.summary}</p>
        </div>
      ))}
  </>
);

export default PostList;
