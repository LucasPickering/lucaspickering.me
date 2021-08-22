import styles from "@root/styles/Narrow.module.css";
import clsx from "clsx";

interface Props {
  className?: string;
  enabled?: boolean;
}

/**
 * A layout wrapper to center a component and limit its width to a center column.
 */
const Narrow: React.FC<Props> = ({ className, enabled = true, children }) => (
  <div className={clsx(className, enabled && styles.narrowContent)}>
    {children}
  </div>
);

export default Narrow;
