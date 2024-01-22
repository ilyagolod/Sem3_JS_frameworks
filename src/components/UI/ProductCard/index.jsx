import { useMemo, useState } from "react";
import { BACKEND_URL } from "../../../constants/backend";
import styles from "./productCard.module.scss";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { getPercent } from "../../../utils/getPercent";
import SaleLabel from "../SaleLabel";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const [showCartBtn, setShowCartBtn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartBtnVisibilityToggler = {
    show() {
      setShowCartBtn(true);
    },
    hide() {
      setShowCartBtn(false);
    },
  };

  const salePercent = useMemo(() => {
    return getPercent(item);
  }, [item]);

  const handleAddCart = (e) => {
    e.stopPropagation();

    dispatch(addItemToCart({ ...item, count: 1 }));
  };

  return (
    <article
      onClick={(e) => {
        navigate(`/products/${item.id}`);
      }}
      className={styles.card}
      onMouseEnter={cartBtnVisibilityToggler.show}
      onMouseLeave={cartBtnVisibilityToggler.hide}
    >
      <div className={styles.image__container}>
        {item.discont_price && (
          <div className={styles.sale__label}>
            <SaleLabel sale={salePercent} />
          </div>
        )}

        <img src={`${BACKEND_URL}${item.image}`} alt="" />
        {showCartBtn && (
          <Button onClick={handleAddCart} isActionBtn={true} width="calc(100% - 32px)">
            Add to cart
          </Button>
        )}
      </div>

      <div className={styles.card__info}>
        <p>{item.title}</p>
        <div className={styles.prices__row}>
          <h2>${item.discont_price ?? item.price}</h2>
          {item.discont_price && <span>${item.price}</span>}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
