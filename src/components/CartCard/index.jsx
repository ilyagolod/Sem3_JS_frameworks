import { BACKEND_URL } from "../../constants/backend";
import styles from "./cartCard.module.scss";

import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import Counter from "../UI/Counter";

import { useDispatch } from "react-redux";
import { addItemToCart, putItemFromCart, removeItemFromCart } from "../../redux/slices/cartSlice";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const onPlus = () => {
    dispatch(addItemToCart({ ...item, count: 1 }));
  };

  const onMinus = () => {
    dispatch(putItemFromCart({ id: item.id }));
  };

  const removeItem = () => {
    dispatch(removeItemFromCart({ id: item.id }));
  };

  return (
    <article className={styles.card__container}>
      <img src={BACKEND_URL + item.image} alt="" />
      <div className={styles.card__content}>
        <div className={styles.content__top}>
          <p>{item.title}</p>
          <CrossIcon onClick={removeItem} />
        </div>
        <div className={styles.content__bottom}>
          <Counter count={item.count} onPlus={onPlus} onMinus={onMinus} />
          <div className={styles.bottom__price}>
            <span>
              $
              {item.discont_price ? (item.discont_price * item.count).toFixed(2) : (item.price * item.count).toFixed(2)}
            </span>
            {item.discont_price && <p>${(item.price * item.count).toFixed(2)}</p>}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
