import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Basket from "../UI/Basket";

import styles from "./header.module.scss";
import globalStyles from "../../styles/global.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={globalStyles.wrapper}>
        <Link to={"/"}>
          <Logo />
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to={"/"}>Main page</Link>
            </li>
            <li>
              <Link to={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link to={"/products"}>All products</Link>
            </li>
            <li>
              <Link to={"/sale"}>All sales</Link>
            </li>
          </ul>
        </nav>
        <Link to={"/cart"}>
          <Basket />
        </Link>
      </div>
    </header>
  );
};

export default Header;
