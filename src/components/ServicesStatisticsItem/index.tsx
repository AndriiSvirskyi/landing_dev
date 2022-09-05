import styles from "./styles.module.scss";
import { Line } from "../Line";
import { ColoredText } from "../Colored";

type ServiceStatisticsItemProps = {
  title: string;
  text: string;
  color: string;
};

export const ServicesStatisticsItem = ({
  title,
  text,
  color,
}: ServiceStatisticsItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.statistic}>
        <Line />
        <div className={styles.number}>
          <ColoredText text={text} color={color} />
          <div className={styles.line}>
            <Line />
          </div>
        </div>
      </div>
    </div>
  );
};
