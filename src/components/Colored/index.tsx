import styles from "./styles.module.scss";

type ColoredTextProps = {
  color: string;
  text: string;
};

export const ColoredText = ({ color, text }: ColoredTextProps) => {
  return <div className={`${styles[color]} ${styles.text}`}>{text}</div>;
};
