import { useState } from "react";
import styles from "./discountButton.module.scss";

const DiscountButton = ({ children, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();

    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

  return (
    <button onClick={handleClick} className={`${styles.button} ${clicked ? styles.active : ""}`}>
      {clicked ? "Request Submitted" : children}
    </button>
  );
};

export default DiscountButton;
