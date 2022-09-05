import styles from "./styles.module.scss";
import { ColoredText } from "../Colored";

export const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraph}>
        Focused experienced software solutions{" "}
        <ColoredText color="pink" text="developers" />_
      </div>
    </div>
  );
};
