import { forwardRef } from "react";
import styles from "./input.module.scss";

const Input = forwardRef(({ placeholder, type = "text", isDark = true, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={`${styles.input} ${isDark ? styles.dark__theme : ""}`}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  );
});

export default Input;
