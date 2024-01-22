import SectionHeader from "../../UI/SectionHeader";

import globalStyles from "../../../styles/global.module.scss";
import { useEffect, useState } from "react";
import CategoryCard from "../../UI/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/categories/all").then(async (res) => {
      setCategories(await res.json());
    });
  }, []);

  return (
    <main className={globalStyles.section__page}>
      <section className={globalStyles.section__block}>
        <div className={globalStyles.wrapper}>
          <SectionHeader showBtn={false}>Categories</SectionHeader>
          <ul className={globalStyles.list}>
            {categories.map((item, index) => (
              <CategoryCard key={index} item={item} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Categories;
