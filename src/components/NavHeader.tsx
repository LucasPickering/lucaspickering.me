import styles from "@root/styles/NavHeader.module.scss";
import clsx from "clsx";

interface Props {
  overlay?: boolean;
}

const NavHeader: React.FC<Props> = ({ overlay = false }) => (
  <header className={clsx(styles.navHeader, overlay && styles.overlay)}>
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
        <a href="/projects">Projects</a>
        <a href="/photos">Photos</a>
        <a href="/about">About</a>
        <a href="https://github.com/LucasPickering">GitHub</a>
      </div>
    </nav>
  </header>
);

export default NavHeader;
