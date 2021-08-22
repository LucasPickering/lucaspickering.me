import styles from "@root/styles/Narrow.module.css";
import clsx from "clsx";

interface Props {
  enabled?: boolean;
}

/**
 * A layout wrapper to center a component and limit its width to a center column.
 */
const Narrow: React.FC<Props> = ({ enabled = true, children }) =>
  enabled ? (
    <div className={clsx(styles.narrowContent)}>{children}</div>
  ) : (
    <>{children}</>
  );

export default Narrow;
