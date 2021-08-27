import React from "react";
import { Image, Placeholder, Transformation } from "cloudinary-react";

/**
 * An optimized image. Should be used for all rendered images.
 */
const ImageOpt: React.FC<React.ComponentProps<typeof Image>> = ({
  className,
  publicId,
  ...rest
}) => {
  // We allow local paths here too, for iterating during writing. In production,
  // we should *always* server images from the CDN
  if (process.env.NODE_ENV === "development" && publicId.startsWith("/")) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className={className} src={publicId} />;
  }

  return (
    <Image loading="lazy" className={className} publicId={publicId} {...rest}>
      <Placeholder />
      <Transformation quality="auto" fetchFormat="auto" />
    </Image>
  );
};

export default ImageOpt;
