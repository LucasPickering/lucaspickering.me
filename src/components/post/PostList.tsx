import { formatDate } from "@root/lib/utils";
import React from "react";
import { Post } from "@root/lib/api";
import styles from "@root/styles/PostList.module.scss";
import ImageOpt from "../ImageOpt";
import Link from "next/link";

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
