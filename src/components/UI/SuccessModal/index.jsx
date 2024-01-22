import { useEffect } from "react";
import styles from "./successModal.module.scss";

import { ReactComponent as CrossIcon } from "../../../assets/icons/cross.svg";

const SuccessModal = ({ close }) => {
  const currentPosition = window.scrollY;

  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => (window.document.body.style.overflow = "visible");
  }, []);

  return (
    <div style={{ top: currentPosition }} className={styles.modal__container}>
      <article>
        <div>
          <span>Congratulations!</span>
          <CrossIcon onClick={close} />
        </div>
        <p>
          {
            "Your order has been successfully placed on the website.\n\nA manager will contact you shortly to confirm your order."
          }
        </p>
      </article>
    </div>
  );
};

export default SuccessModal;
