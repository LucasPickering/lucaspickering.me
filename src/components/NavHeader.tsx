import styles from "@root/styles/NavHeader.module.css";

const NavHeader: React.FC = ({ children }) => (
  <header className={styles.navHeader}>
    <nav className={styles.navBar}>
      {/* Home link */}
      <div className={styles.titleLinkWrapper}>
        <a className={styles.titleLink} href="/">
          A Thought
        </a>
        <p className={styles.caption}>(All I could muster)</p>
      </div>

      {/* Other links */}
      <div className={styles.otherLinks}>
        <a href="/projects/">Projects</a>
        <a href="/photos/">Photos</a>
        <a href="/about/">About Me</a>
        <a href="https://github.com/LucasPickering">GitHub</a>
      </div>
    </nav>
  </header>
);

export default NavHeader;
