import globalStyles from "../../../styles/global.module.scss";
import SectionHeader from "../../UI/SectionHeader";
import styles from "./cart.module.scss";
import UserForm from "../../UI/UserForm";

import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../CartCard";
import { orderApi } from "../../../services/orderApi";
import SuccessModal from "../../UI/SuccessModal";
import { useState } from "react";
import { clearCart } from "../../../redux/slices/cartSlice";

import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, itemsCount } = useSelector((state) => state.cart);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return items
      .reduce((acc, curr) => {
        return acc + curr.count * (curr.discont_price ?? curr.price);
      }, 0)
      .toFixed(2);
  };

  const sendOrder = (data) => {
    orderApi.sendRequest({ products: items, total_price: getTotalPrice(), ...data }).then((res) => {
      if (res.status === 200) {
        setModalIsVisible(true);
        dispatch(clearCart());
      }
    });
  };

  return (
    <main className={styles.cart__container}>
      <section className={globalStyles.section__block}>
        <div className={globalStyles.wrapper}>
          <SectionHeader link={-1} btnText={"Back to the store"}>
            Shopping cart
          </SectionHeader>
          {items.length > 0 ? (
            <div className={styles.cart__content}>
              <div className={styles.order__items}>
                {items.map((item, index) => (
                  <CartCard key={index} item={item} />
                ))}
              </div>
              <aside className={styles.order__form}>
                <b>Order detail</b>
                <p>{itemsCount} items</p>
                <div className={styles.total__row}>
                  <p>Total</p>
                  <span>${getTotalPrice()}</span>
                </div>

                <UserForm btnType="default" onSubmit={sendOrder} />
              </aside>
            </div>
          ) : (
            <div className={styles.empty__container}>
              <p>Looks like you have no items in your basket currently</p>
              <Button onClick={() => navigate("/products")}>Continue Shopping</Button>
            </div>
          )}
        </div>
      </section>
      {modalIsVisible && <SuccessModal close={() => setModalIsVisible(false)} />}
    </main>
  );
};

export default Cart;
