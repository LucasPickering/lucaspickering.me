import styles from "@root/styles/Code.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Code: React.FC<Props> = ({ className, children, ...rest }) => (
  <code className={clsx(styles.code, className)} {...rest}>
    {children}
  </code>
);

export default Code;
