import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type LineProps = {
  quantity?: number;
};

export const Line = ({ quantity = 1 }: LineProps) => {
  let [lines, setLines] = useState<any[]>([]);

  useEffect(() => {
    if (lines.length !== quantity) {
      for (let i = 0; i < quantity; i++) {
        setLines((prev) => [...prev, { id: `line${i}` }]);
      }
    }
  }, []);

  return (
    <div className={styles.lines}>
      {lines.map(({ id }) => {
        return <div className={styles.line} key={id}></div>;
      })}
    </div>
  );
};
