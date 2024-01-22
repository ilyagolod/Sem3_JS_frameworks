import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import SectionHeader from "../../UI/SectionHeader";
import styles from "./home.module.scss";
import CategoryCard from "../../UI/CategoryCard";
import { BACKEND_URL } from "../../../constants/backend";
import DiscountSection from "../../DiscountSection";
import ProductCard from "../../UI/ProductCard";

import globalStyles from "../../../styles/global.module.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/categories/all").then(async (res) => {
      fetch("http://localhost:3333/categories/1").then(async (res) => {
        console.log(await res.json());
      });
      setCategories((await res.json()).slice(0, 4));
    });
    fetch(`${BACKEND_URL}/products/all`).then(async (res) => {
      const data = await res.json();
      const saleData = data.filter((item) => item.discont_price);
      setSales(saleData.slice(0, 4));
    });
  }, []);
  useEffect(() => {
    console.log(sales);
  }, [sales]);

  return (
    <main>
      <section className={globalStyles.section__block}>
        <div className={styles.head}>
          <div className={globalStyles.wrapper}>
            <h1 className={styles.title}>Amazing Discounts on Garden Products!</h1>
            <Button>Check out</Button>
          </div>
        </div>
      </section>
      <section className={globalStyles.section__block}>
        <div className={globalStyles.wrapper}>
          <SectionHeader link={"categories"} btnText={"All categories"}>
            Categories
          </SectionHeader>
          <ul className={globalStyles.list}>
            {categories.map((category, index) => (
              <li key={index}>
                <CategoryCard item={category} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <DiscountSection />
      <section className={globalStyles.section__block}>
        <div className={globalStyles.wrapper}>
          <SectionHeader btnText={"All sales"}>Sale</SectionHeader>
          <ul className={globalStyles.list}>
            {sales.map((sale, index) => (
              <li key={index}>
                <ProductCard item={sale} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
