import { useState } from "react";
import styles from "./button.module.scss";

const Button = ({ children, onClick = () => {}, width = "auto", isActionBtn = false, activeText = "Added" }) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = (e) => {
    onClick(e);

    if (isActionBtn) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 1500);
    }
  };

  return (
    <button
      onClick={clickHandler}
      style={{ width: width }}
      className={`${styles.button} ${clicked ? styles.added__to_cart : ""}`}
    >
      {clicked ? activeText : children}
    </button>
  );
};

export default Button;
