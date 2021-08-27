import React from "react";
import Head from "next/head";
import { Post } from "@root/lib/api";
import styles from "@root/styles/PostView.module.scss";
import { formatDate } from "@root/lib/utils";
import PageContainer from "../PageContainer";
import ImageOpt from "../ImageOpt";
import clsx from "clsx";
import { useCloudinary } from "@root/lib/useCloudinary";

interface Props {
  metadata: Post["metadata"];
}

const PostView: React.FC<Props> = ({ metadata, children }) => {
  // Only photo essays should show large-format photos
  const isGallery = metadata.isGallery ?? false;

  // Get a scaled down version of the banner, for previews and such
  const cloudinary = useCloudinary();
  const bannerSrc = cloudinary.url(metadata.banner, {
    // 1200x627 is recommended size for previews
    width: 1200,
    height: 627,
    crop: "fill",
  });

  return (
    <PageContainer
      // Use a *global* class here, so all our children can look for it
      className={clsx(isGallery && "gallery")}
      isGallery={isGallery}
    >
      <Head>
        <title>{metadata.title} | Lucas Pickering</title>
        <meta name="description" content={metadata.summary} />
        <meta name="og:title" content={metadata.title} />
        <meta name="og:image" content={bannerSrc} />
        <meta name="og:description" content={metadata.summary} />
        {/* TODO og:url */}
      </Head>
      <article>
        <header className={styles.postHeader}>
          <div className={styles.headerText}>
            <h1 className={styles.postTitle}>{metadata.title}</h1>
            <p className={styles.postSummary}>{metadata.summary}</p>
            <span className={styles.postDate}>{formatDate(metadata.date)}</span>
            {metadata.links && (
              <div className={styles.postLinks}>
                {Object.entries(metadata.links).map(([key, href]) => (
                  <a key={key} href={href}>
                    {key}
                  </a>
                ))}
              </div>
            )}
          </div>

          <ImageOpt className={styles.banner} publicId={metadata.banner} />
        </header>

        <div className={styles.postBody}>{children}</div>
      </article>
    </PageContainer>
  );
};

export default PostView;
