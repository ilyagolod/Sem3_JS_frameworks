import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../../constants/backend";
import styles from "./categoryCard.module.scss";

const CategoryCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categories/${item.id}`);
  };

  return (
    <article className={styles.card} onClick={handleClick}>
      <img src={`${BACKEND_URL}${item.image}`} alt={item.image} />
      <p>{item.title}</p>
    </article>
  );
};

export default CategoryCard;
