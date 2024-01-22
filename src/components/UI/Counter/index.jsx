import { useState } from "react";
import styles from "./counter.module.scss";

const Counter = ({ count = 1, onPlus = () => {}, onMinus = () => {} }) => {
  const [value, setValue] = useState(1);

  const valueChanger = {
    plus() {
      if (count < 10) {
        console.log("PLUS");
        onPlus();
        // setValue((prev) => prev + 1);
      }
    },
    minus() {
      if (count > 1) {
        onMinus();
        // setValue((prev) => prev - 1);
      }
    },
  };

  return (
    <div className={styles.counter__container}>
      <button onClick={valueChanger.minus}>-</button>
      <div>{count}</div>
      <button onClick={valueChanger.plus}>+</button>
    </div>
  );
};

export default Counter;
