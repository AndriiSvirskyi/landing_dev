import styles from "./styles.module.scss";
import { ColoredText } from "../Colored";
import { Line } from "../Line";

export const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <ColoredText color="green" text="Let's run" /> your idea{" "}
        <ColoredText color="pink" text="#" />
      </div>
      <div className={styles.formContainer}>
        <Line />
        <form className={styles.inputs}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Your request description"
            className={styles.input}
          ></textarea>
          <button className={styles.button}>
            <ColoredText color="blue" text="Send" />
          </button>
        </form>
      </div>
    </div>
  );
};
