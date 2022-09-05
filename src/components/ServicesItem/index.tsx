import styles from "./styles.module.scss";
import { ColoredText } from "../Colored/";

type ServicesItemsProps = {
  title: string;
  paragraph: string;
  width: string;
};

export const ServicesItem = ({
  title,
  paragraph,
  width,
}: ServicesItemsProps) => {
  return (
    <div className={styles.service}>
      <div
        className={styles.title}
        style={{
          //@ts-ignore
          "--width": width,
        }}
      >
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
