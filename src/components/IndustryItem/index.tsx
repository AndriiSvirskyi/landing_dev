import styles from "./styles.module.scss";
import { ColoredText } from "../Colored";
import { Line } from "../Line";

type IndustryItemProps = {
  icon: any;
  title: string;
  text: string;
  color: string;
};

export const IndustryItem = ({
  icon,
  title,
  text,
  color,
}: IndustryItemProps) => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>
          <ColoredText color={color} text={title} />
        </div>
        <div className={styles.bracketLeft}>{"{"}</div>
      </div>
      <div className={styles.text}>
        <Line />
        {text}
      </div>
      <div className={styles.bracketRight}>{"}"}</div>
    </div>
  );
};
