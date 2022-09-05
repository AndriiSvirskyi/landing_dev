import styles from "./styles.module.scss";
import { ColoredText } from "../Colored";
import { ReactComponent as Minus } from "../../assets/minus.svg";

type AboutUsItemProps = {
  setIsOpen: any;
  isOpen: boolean;
  isMainToggle: boolean;
  isLastItem?: boolean;
  color: string;
  title: string;
  data: any;
};

export const AboutUsItem = ({
  setIsOpen,
  isOpen,
  isMainToggle,
  color,
  title,
  data,
  isLastItem,
}: AboutUsItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>
          <div
            className={styles.toggle}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Minus />
            {!isOpen && (
              <div className={styles.plus}>
                <Minus />
              </div>
            )}
          </div>
        </div>
        <div
          className={`${styles.line} 
            ${isOpen && isMainToggle ? styles.mainLine : ""} 
            ${!isOpen && isMainToggle ? styles.mainLineClosed : ""}
            ${isLastItem ? styles.none : ""}`}
        ></div>
      </div>

      <div>
        <ColoredText color={color} text={title} />
        {isOpen && (
          <div className={isMainToggle ? styles.main : ""}>{data}</div>
        )}
      </div>
    </div>
  );
};
