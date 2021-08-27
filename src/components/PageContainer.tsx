import NavHeader from "./NavHeader";
import clsx from "clsx";
import styles from "@root/styles/PageContainer.module.scss";
import stylesUtils from "@root/styles/utils.module.scss";

interface Props {
  className?: string;
  isGallery?: boolean;
}

const PageContainer: React.FC<Props> = ({
  className,
  isGallery = false,
  children,
}) => (
  <div
    className={clsx(
      className,
      styles.contentWrapper,
      !isGallery && stylesUtils.narrow
    )}
  >
    <NavHeader overlay={isGallery} />

    <main className={styles.mainContent}>{children}</main>

    <footer className={styles.footer}>
      <span>Copyright 2021 Lucas Pickering</span>
      <a href="/">Recursion!</a>
    </footer>
  </div>
);

export default PageContainer;
