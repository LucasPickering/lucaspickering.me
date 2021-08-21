import React from "react";
import { Post } from "@root/lib/api";
import PageContainer from "./PageContainer";
import styles from "@root/styles/PostView.module.css";
import { formatDate } from "@root/lib/utils";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Image from "./Image";

interface Props {
  metadata: Post["metadata"];
}

const mdxComponents = {
  img: Image,
};

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
      <img className={styles.banner} src={metadata.banner} />
      <MDXProvider components={mdxComponents}>
        <div>{children}</div>
      </MDXProvider>
    </article>
  </PageContainer>
);

export default PostView;
