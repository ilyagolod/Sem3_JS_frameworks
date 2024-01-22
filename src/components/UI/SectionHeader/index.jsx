import styles from "./sectionHeader.module.scss";
import { Link } from "react-router-dom";

const SectionHeader = ({ children, link, showBtn = true, btnText }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{children}</h2>
      {showBtn && (
        <>
          <span />
          <Link to={link} className={styles.btn}>
            {btnText}
          </Link>
        </>
      )}
    </div>
  );
};

export default SectionHeader;
