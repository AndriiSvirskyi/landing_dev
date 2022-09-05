import styles from "./styles.module.scss";
import { ColoredText } from "../Colored/";

type ServicesItemsProps = {
  title: string;
  paragraph: string;
};

export const ServicesItem = ({ title, paragraph }: ServicesItemsProps) => {
  return (
    <div className={styles.service}>
      <div className={styles.title}>
        <ColoredText color="yellow" text={title}></ColoredText>
      </div>
      <div className={styles.paragraph}>
        {paragraph}
        <button className={styles.button}>
          <ColoredText color="blue" text="Click here"></ColoredText>
        </button>
      </div>
    </div>
  );
};
