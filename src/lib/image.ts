import { Cloudinary } from "cloudinary-core";

/**
 * A singleton instance for generating Cloudinary URLs. In most cases this isn't
 * needed because you can junst use next's Image component.
 *
 * Dan Abramov would be mad about a singleton but that's fine, it works.
 */
const cloudinary = new Cloudinary({ cloud_name: "lucaspickering" });

/**
 * Get an image URL that can be used for the og:image meta tag.
 * @param src The base image path in Cloudinary
 * @returns A Cloudinary URL that specifies the correct size of the image
 */
export function getOGImageSrc(src: string): string {
  return cloudinary.url(src, {
    // 1200x627 is recommended size for previews
    width: 1200,
    height: 627,
    crop: "fill",
  });
}
