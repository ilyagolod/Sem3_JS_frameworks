import styles from "./saleLabel.module.scss";

const SaleLabel = ({ sale }) => {
  return <span className={styles.sale__label}>-{sale}%</span>;
};

export default SaleLabel;
