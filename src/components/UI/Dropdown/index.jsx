import { forwardRef, useState } from "react";

import styles from "./dropdown.module.scss";
import { ReactComponent as DropdownArrow } from "../../../assets/icons/dropdown_arrow.svg";

const Dropdown = ({ values, onChange, ...rest }) => {
  const [selectedValue, setSelectedValue] = useState(values[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleStatus = () => {
    setIsOpen((prev) => !prev);
  };

  const selectHandler = (value) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} name="" id="">
      <div onClick={toggleStatus} className={styles.active__container}>
        {selectedValue}
        <DropdownArrow className={isOpen ? styles.rotate__arrow : ""} />
      </div>
      {isOpen && (
        <div className={styles.values__list}>
          {values.map((value, key) => (
            <p
              key={key}
              className={value === selectedValue ? styles.active__value : ""}
              onClick={() => selectHandler(value)}
            >
              {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
