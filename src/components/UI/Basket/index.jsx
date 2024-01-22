import { ReactComponent as BasketIcon } from "../../../assets/icons/basket.svg";
import styles from "./basket.module.scss";

import { useSelector } from "react-redux";

const Basket = () => {
  const { itemsCount, items } = useSelector((state) => state.cart);

  console.log(items);

  return (
    <button className={styles.basket}>
      <BasketIcon />
      {itemsCount > 0 && <span>{itemsCount}</span>}
    </button>
  );
};

export default Basket;
