import React from "react";
import { toArray } from "@root/lib/utils";
import ImageOpt from "./ImageOpt";
import styles from "@root/styles/Gallery.module.scss";
import clsx from "clsx";

interface Props {
  caption?: string;
  // Should be cloudinary public IDs. Support a single image, for convenience
  images: string | string[];
}

/**
 * A collection of images, with an optional caption. Multiple images in one
 * gallery will be tiled.
 */
const Gallery = ({ caption, images }: Props): React.ReactElement => (
  <figure className={clsx(styles.gallery)}>
    <div className={styles.galleryInternal}>
      {toArray(images).map((publicId) => (
        <ImageOpt key={publicId} publicId={publicId} />
      ))}
    </div>
    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
);

export default Gallery;
