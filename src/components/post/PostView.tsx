import { Resize } from "@cloudinary/url-gen/actions";
import { Post } from "@root/lib/api";
import { cloudinary } from "@root/lib/cloudinary";
import { formatDate } from "@root/lib/utils";
import styles from "@root/styles/PostView.module.scss";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import ImageOpt from "../ImageOpt";
import PageContainer from "../PageContainer";

interface Props {
  metadata: Post["metadata"];
  children?: React.ReactNode;
}

const PostView: React.FC<Props> = ({ metadata, children }) => {
  // Only photo essays should show large-format photos
  const isGallery = metadata.isGallery ?? false;

  // Get a scaled down version of the banner, for previews and such
  const bannerSrc =
    metadata.banner &&
    cloudinary
      .image(metadata.banner)
      // 1200x627 is recommended size for previews
      .resize(Resize.fill(1200, 627))
      .toURL();

  return (
    <PageContainer
      // Use a *global* class here, so all our children can look for it
      className={clsx(isGallery && "gallery")}
      isGallery={isGallery}
    >
      <Head>
        {/* String interpolation is needed to prevent a warning from Next */}
        <title>{`${metadata.title} | Lucas Pickering`}</title>
        <meta name="description" content={metadata.summary} />
        <meta name="og:title" content={metadata.title} />
        {bannerSrc && <meta name="og:image" content={bannerSrc} />}
        <meta name="og:description" content={metadata.summary} />
        {/* TODO og:url */}
      </Head>
      <article>
        <header className={styles.postHeader}>
          <div className={styles.headerText}>
            <h1 className={styles.postTitle}>{metadata.title}</h1>
            <p className={styles.postSummary}>{metadata.summary}</p>
            {metadata.date && (
              <span className={styles.postDate}>
                {formatDate(metadata.date)}
              </span>
            )}
            {metadata.links && (
              <div className={styles.postLinks}>
                {Object.entries(metadata.links).map(([key, href]) => (
                  <Link key={key} href={href}>
                    <a>{key}</a>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {metadata.banner && (
            <ImageOpt
              className={styles.banner}
              sizes="100vw"
              src={metadata.banner}
              width={800}
              height={300}
            />
          )}
        </header>

        <div className={styles.postBody}>{children}</div>
      </article>
    </PageContainer>
  );
};

export default PostView;
