// https://github.com/cloudinary/cloudinary-react/issues/74#issuecomment-842756982

interface CloudinaryContextProps {
  cloudName: string;
  includeOwnBody: boolean;
}

interface ImageProps extends JSX.IntrinsicElements.img {
  publicId: string;
  crop: string;
}

interface VideoProps extends JSX.IntrinsicElements.video {
  publicId: string;
}

interface PlaceholderProps {
  type?: "blur" | "pixelate" | "vectorize" | "predominant";
}

interface TransformationProps {
  fetchFormat?: string;
  quality?: string;
}

declare module "cloudinary-react" {
  export const CloudinaryContext: React.FC<CloudinaryContextProps>;

  export const Image: React.FC<PropsWithChildren<ImageProps>>;

  export const Video: React.FC<PropsWithChildren<VideoProps>>;

  export const Placeholder: React.FC<PropsWithChildren<PlaceholderProps>>;

  export const Transformation: React.FC<TransformationProps>;
}
