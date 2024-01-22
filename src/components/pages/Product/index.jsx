import { useEffect, useState } from "react";
import globalStyles from "../../../styles/global.module.scss";
import { BACKEND_URL } from "../../../constants/backend";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import styles from "./product.module.scss";
import { getPercent } from "../../../utils/getPercent";
import Counter from "../../UI/Counter";
import Button from "../../UI/Button";
import SaleLabel from "../../UI/SaleLabel";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../redux/slices/cartSlice";
import { fetchProductById, resetCurrentProduct } from "../../../redux/slices/shopSlice";

const Product = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentProduct: product } = useSelector((state) => state.shop);

  const addToCart = () => {
    dispatch(addItemToCart({ ...product, count }));
  };

  useEffect(() => {
    dispatch(fetchProductById(id));

    return () => dispatch(resetCurrentProduct());
  }, []);

  useEffect(() => {
    if (!product) {
      navigate("/not-found");
    }
  }, [product]);

  if (!product) {
    return <></>;
  }

  return (
    <main className={globalStyles.section__page}>
      <section className={globalStyles.section__block}>
        <div className={globalStyles.wrapper}>
          <div className={styles.product__container}>
            <img src={`${BACKEND_URL}${product.image}`} alt="" />
            <div className={styles.product__info__container}>
              <h1>{product.title}</h1>
              <div className={styles.price__container}>
                <h1>${product.discont_price ?? product.price}</h1>
                {product.discont_price && (
                  <>
                    <h2>${product.price}</h2>
                    <SaleLabel sale={getPercent(product)} />
                  </>
                )}
              </div>
              <div className={styles.actions__container}>
                <Counter
                  count={count}
                  onMinus={() => setCount((prev) => prev - 1)}
                  onPlus={() => setCount((prev) => prev + 1)}
                />
                <Button onClick={addToCart} width="100%" isActionBtn={true}>
                  Add to cart
                </Button>
              </div>
              <div className={styles.description__container}>
                <span>Description</span>
                <p>{product.description}</p>
                <div>Read more</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
