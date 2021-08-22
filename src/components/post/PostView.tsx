import React from "react";
import Head from "next/head";
import { Post } from "@root/lib/api";
import styles from "@root/styles/PostView.module.css";
import { formatDate } from "@root/lib/utils";
import PageContainer from "../PageContainer";
import ImageOpt from "../ImageOpt";
import Narrow from "../Narrow";
import clsx from "clsx";

interface Props {
  metadata: Post["metadata"];
}

const PostView: React.FC<Props> = ({ metadata, children }) => {
  // Only photo essays should show the fancy banner
  const showFullscreenBanner = metadata.fullscreenIntro ?? false;

  return (
    <PageContainer wide={showFullscreenBanner}>
      <Head>
        <title>{metadata.title} | Lucas Pickering</title>
      </Head>
      <article>
        <header
          className={clsx(
            styles.postHeader,
            showFullscreenBanner && styles.fullscreen
          )}
        >
          <h1>{metadata.title}</h1>
          <span className={styles.postDate}>{formatDate(metadata.date)}</span>
          <p>{metadata.summary}</p>
          <div className={styles.postLinks}>
            {metadata.links &&
              Object.entries(metadata.links).map(([key, href]) => (
                <a key={key} href={href}>
                  {key}
                </a>
              ))}
          </div>

          {/* Banner image goes under the header content */}
          <ImageOpt
            className={clsx(
              styles.banner,
              showFullscreenBanner && styles.fullscreen
            )}
            publicId={metadata.banner}
          />
        </header>

        <Narrow>{children}</Narrow>
      </article>
    </PageContainer>
  );
};

export default PostView;
