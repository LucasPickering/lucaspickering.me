import React from "react";
import Head from "next/head";
import { Post } from "@root/lib/api";
import styles from "@root/styles/PostView.module.css";
import { formatDate } from "@root/lib/utils";
import PageContainer from "../PageContainer";
import ImageOpt from "../ImageOpt";
import Narrow from "../Narrow";
import clsx from "clsx";
import { useCloudinary } from "@root/lib/useCloudinary";

interface Props {
  metadata: Post["metadata"];
}

const PostView: React.FC<Props> = ({ metadata, children }) => {
  // Only photo essays should show the fancy banner
  const showFullscreenBanner = metadata.fullscreenIntro ?? false;

  // Get a scaled down version of the banner, for previews and such
  const cloudinary = useCloudinary();
  const bannerSrc = cloudinary.url(metadata.banner, {
    // 1200x627 is recommended size for previews
    width: 1200,
    height: 627,
    crop: "fill",
  });

  return (
    <PageContainer wide={showFullscreenBanner}>
      <Head>
        <title>{metadata.title} | Lucas Pickering</title>
        <meta name="description" content={metadata.summary} />
        <meta name="og:title" content={metadata.title} />
        <meta name="og:image" content={bannerSrc} />
        <meta name="og:description" content={metadata.summary} />
        {/* TODO og:url */}
      </Head>
      <article>
        <header
          className={clsx(
            styles.postHeader,
            showFullscreenBanner && styles.fullscreen
          )}
        >
          <h1 className={styles.postTitle}>{metadata.title}</h1>
          <p className={styles.postSummary}>{metadata.summary}</p>
          <span className={styles.postDate}>{formatDate(metadata.date)}</span>
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
