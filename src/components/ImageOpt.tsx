import { cloudinary } from "@root/lib/cloudinary";
import Image, { ImageLoader } from "next/future/image";

type Props = Omit<React.ComponentProps<typeof Image>, "alt">;

const loader: ImageLoader = ({ src }) => {
  // We allow local paths here too, for iterating during writing. In production,
  // we should *always* server images from the CDN
  if (process.env.NODE_ENV === "development" && src.startsWith("/")) {
    return src;
  }
  return cloudinary.image(src).toURL();
};

/**
 * An optimized image. Should be used for all rendered images.
 */
const ImageOpt: React.FC<Props> = (props) => (
  // TODO use alt text from cloudinary
  <Image alt="TODO" loader={loader} {...props} />
);

export default ImageOpt;
