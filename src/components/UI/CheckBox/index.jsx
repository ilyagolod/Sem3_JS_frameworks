import React from "react";
import styles from "./checkbox.module.scss";

const CheckBox = ({ onChange, label }) => {
  return (
    <label className={styles.container}>
      {label}
      <input onChange={({ currentTarget }) => onChange(currentTarget.checked)} type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
