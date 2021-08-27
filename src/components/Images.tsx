import React from "react";
import { toArray } from "@root/lib/utils";
import ImageOpt from "./ImageOpt";
import styles from "@root/styles/Images.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
  caption?: string;
  columns?: number;
  // Should be cloudinary public IDs. Support a single image, for convenience
  images: string | string[];
}

/**
 * A collection of images, with an optional caption. Multiple images in one
 * set will be tiled.
 */
const Images = ({
  className,
  caption,
  columns = 1,
  images,
}: Props): React.ReactElement => (
  <figure
    className={clsx(styles.images, className)}
    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
  >
    {toArray(images).map((publicId) => (
      <ImageOpt key={publicId} publicId={publicId} />
    ))}
    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
);

export default Images;
