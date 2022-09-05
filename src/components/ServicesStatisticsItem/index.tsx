import styles from "./styles.module.scss";
import { Line } from "../Line";
import { ColoredText } from "../Colored";

type ServiceStatisticsItemProps = {
  title: string;
  text: number;
  color: string;
  left: string;
};

export const ServicesStatisticsItem = ({
  title,
  text,
  color,
  left,
}: ServiceStatisticsItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.statistic}>
        <Line />
        <div
          className={styles.number}
          style={{
            //@ts-ignore
            "--text": text,
            "--color": color,
            "--left": left,
          }}
        >
          <div className={styles.plus}>{title === "Cakes:" ? "M+" : "+"}</div>
          <div className={styles.line}>
            <Line />
          </div>
        </div>
      </div>
    </div>
  );
};
