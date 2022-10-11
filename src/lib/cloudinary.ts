import { Cloudinary } from "@cloudinary/url-gen";

export const cloudinaryCloudName = "lucaspickering";

// Use a singleton instance, because we don't need any configurability.
// Dan Abramov would be mad but that's fine, it works.
export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: cloudinaryCloudName,
  },
  url: {
    secure: true,
  },
});
