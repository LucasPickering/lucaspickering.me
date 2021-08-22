import React from "react";
import { Post } from "@root/lib/api";
import PageContainer from "./PageContainer";
import styles from "@root/styles/PostView.module.css";
import { formatDate } from "@root/lib/utils";
import Head from "next/head";
import ImageOpt from "./ImageOpt";

interface Props {
  metadata: Post["metadata"];
}

const PostView: React.FC<Props> = ({ metadata, children }) => (
  <PageContainer>
    <Head>
      <title>{metadata.title} | Lucas Pickering</title>
    </Head>
    <article>
      <div className={styles.postHeader}>
        <h1>{metadata.title}</h1>
        <span className={styles.postDate}>{formatDate(metadata.date)}</span>
      </div>
      <div className={styles.postLinks}>
        {metadata.links &&
          Object.entries(metadata.links).map(([key, href]) => (
            <a key={key} href={href}>
              {key}
            </a>
          ))}
      </div>
      <ImageOpt className={styles.banner} publicId={metadata.banner} />
      <div>{children}</div>
    </article>
  </PageContainer>
);

export default PostView;
