import styles from "@root/styles/PageContainer.module.css";
import NavHeader from "./NavHeader";
import Narrow from "./Narrow";

interface Props {
  wide?: boolean;
}

const PageContainer: React.FC<Props> = ({ wide = false, children }) => (
  <Narrow className={styles.contentWrapper} enabled={!wide}>
    <NavHeader overlay={wide} />

    <main className={styles.mainContent}>{children}</main>

    <footer className={styles.footer}>
      <span>Copyright 2021 Lucas Pickering</span>
      <a href="/">Recursion!</a>
    </footer>
  </Narrow>
);

export default PageContainer;
