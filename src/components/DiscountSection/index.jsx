import DiscountImage from "../../assets/images/discount.png";

import styles from "./discountSection.module.scss";
import globalStyls from "../../styles/global.module.scss";
import UserForm from "../UI/UserForm";
import { saleApi } from "../../services/saleApi";

const DiscountSection = () => {
  const sendDiscountRequest = (data) => {
    saleApi.sendRequest(data);
  };

  return (
    <section className={globalStyls.section__block}>
      <div className={globalStyls.wrapper}>
        <div className={styles.discount__container}>
          <h1 className={styles.title}>5% off on the first order</h1>
          <div className={styles.discount__content}>
            <img src={DiscountImage} alt="discount" />
            <UserForm isDark={false} onSubmit={sendDiscountRequest} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
