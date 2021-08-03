import styles from "@root/styles/Image.module.css";

// TODO automatically scale images to fit in the screen

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
}) => (
  <>
    <img src={src} alt={alt} />
    {alt && <span className={styles.caption}>{alt}</span>}
  </>
);

export default Image;
