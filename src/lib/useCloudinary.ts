import { Cloudinary } from "cloudinary-core";

export const cloudinaryCloudName = "lucaspickering";

// Use a singleton instance, because we don't need any configurability.
// Dan Abramov would be mad but that's fine, it works.
const cloudinary = new Cloudinary({ cloud_name: cloudinaryCloudName });

/**
 * Get a reference to the Cloudinary singleton, for constructing Cloudinary calls
 * and such. In most cases this isn't needed, you can just use the components
 * directly from cloudinary-react.
 */
export function useCloudinary(): Cloudinary {
  return cloudinary;
}
