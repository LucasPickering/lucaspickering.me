import styles from "@root/styles/PageContainer.module.css";
import NavHeader from "./NavHeader";

const PageContainer: React.FC = ({ children }) => (
  <div className={styles.contentWrapper}>
    <NavHeader />

    <main className={styles.mainContent}>{children}</main>

    <footer className={styles.footer}>
      <span>Copyright 2021 Lucas Pickering</span>
      <a href="/">Recursion!</a>
    </footer>
  </div>
);

export default PageContainer;
