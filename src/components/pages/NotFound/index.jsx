import { ReactComponent as NotFoundIcon } from "../../../assets/icons/404.svg";

import styles from "./notfound.module.scss";
import globalStyles from "../../../styles/global.module.scss";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className={globalStyles.section__block}>
        <div className={styles.notfound__container}>
          <NotFoundIcon />
          <h1>Page Not Found</h1>
          <p>
            We’re sorry, the page you requested could not be found. Please go back to the homepage.
          </p>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
