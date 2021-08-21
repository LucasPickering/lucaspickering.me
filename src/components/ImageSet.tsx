import styles from "@root/styles/ImageSet.module.css";
import Image from "./Image";

interface Props {
  images: Array<React.ComponentProps<typeof Image>>;
}

const ImageSet: React.FC<Props> = ({ images }) => (
  <div className={styles.imageSet}>
    {images.map((image) => (
      <Image {...image} />
    ))}
  </div>
);

export default ImageSet;
