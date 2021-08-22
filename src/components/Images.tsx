import React from "react";
import { toArray } from "@root/lib/utils";
import ImageOpt from "./ImageOpt";
import styles from "@root/styles/Images.module.css";

interface Props {
  caption?: string;
  // Should be cloudinary public IDs. Support a single image, for convenience
  images: string | string[];
}

const Images = ({ caption, images }: Props): React.ReactElement => (
  <figure className={styles.imagesWrapper}>
    <div className={styles.images}>
      {toArray(images).map((publicId) => (
        <ImageOpt key={publicId} publicId={publicId} />
      ))}
    </div>
    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
);

export default Images;
