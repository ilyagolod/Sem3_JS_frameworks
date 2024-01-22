import styles from "./contact.module.scss";

const ContactCard = ({ children, title }) => {
  return (
    <div className={styles.card}>
      <span>{title}</span>
      {children}
    </div>
  );
};

export default ContactCard;
