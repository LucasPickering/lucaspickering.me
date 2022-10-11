import styles from "@root/styles/NavHeader.module.scss";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  overlay?: boolean;
}

const NavHeader: React.FC<Props> = ({ overlay = false }) => (
  <header className={clsx(styles.navHeader, overlay && styles.overlay)}>
    <nav className={styles.navBar}>
      {/* Home link */}
      <Link href="/">
        <a className={styles.titleLink}>A Thought</a>
      </Link>

      {/* Other links */}
      <div className={styles.otherLinks}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>

        <a href="https://github.com/LucasPickering">GitHub</a>
      </div>
    </nav>
  </header>
);

export default NavHeader;
