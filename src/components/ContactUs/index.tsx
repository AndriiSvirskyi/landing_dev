import styles from "./styles.module.scss";
import { Line } from "../Line";
import { ColoredText } from "../Colored";

export const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Coordinates [</h3>
      <div className={styles.industries}>
        <Line />
        <div>
          <div>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <ColoredText color="pink" text="US" />
              </div>
              <div className={styles.bracketLeft}>{"{"}</div>
            </div>
            <div className={styles.text}>
              <Line />
              Affinia Manhattan Hotel, 70 Washington Square South, New York, NY
              10012, United States
            </div>
            <div className={styles.bracketRight}>{"}"}</div>
          </div>
          <div>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <ColoredText color="yellow" text="UA" />
              </div>
              <div className={styles.bracketLeft}>{"{"}</div>
            </div>
            <div className={styles.text}>
              <Line />
              Affinia Manhattan Hotel, 70 Washington Square South, New York, NY
              10012, United States
            </div>
            <div className={styles.bracketRight}>{"}"}</div>
          </div>
          <div>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <ColoredText color="blue" text="UK" />
              </div>
              <div className={styles.bracketLeft}>{"{"}</div>
            </div>
            <div className={styles.text}>
              <Line />
              Affinia Manhattan Hotel, 70 Washington Square South, New York, NY
              10012, United States
            </div>
            <div className={styles.bracketRight}>{"}"}</div>
          </div>
        </div>
      </div>
      <span className={styles.brackets}>]</span>
      <div className={styles.email}>
        Email: <ColoredText color="green" text="connect@devadev.io" />
      </div>
    </div>
  );
};
