import NavHeader from "./NavHeader";
import clsx from "clsx";
import styles from "@root/styles/PageContainer.module.scss";
import stylesUtils from "@root/styles/utils.module.scss";
import Link from "next/link";

interface Props {
  className?: string;
  isGallery?: boolean;
  children?: React.ReactNode;
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
      <span>Copyright {new Date().getUTCFullYear()} Lucas Pickering</span>
      <Link href="/">
        <a>Recursion!</a>
      </Link>
    </footer>
  </div>
);

export default PageContainer;
