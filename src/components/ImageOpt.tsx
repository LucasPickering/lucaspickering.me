import React from "react";
import { Image, Placeholder, Transformation } from "cloudinary-react";

/**
 * An optimized image. Should be used for all rendered images.
 */
const ImageOpt: React.FC<React.ComponentProps<typeof Image>> = (props) => (
  <Image loading="lazy" {...props}>
    <Placeholder />
    <Transformation quality="auto" fetchFormat="auto" />
  </Image>
);

export default ImageOpt;
