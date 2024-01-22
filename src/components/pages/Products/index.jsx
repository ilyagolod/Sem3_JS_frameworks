import { useEffect, useMemo, useState } from "react";

import SectionHeader from "../../UI/SectionHeader";
import ProductCard from "../../UI/ProductCard";

import globalStyles from "../../../styles/global.module.scss";
import Filters from "../../Filters";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchProductsByCategoryId } from "../../../redux/slices/shopSlice";

const Products = ({ isCategory = false, onlySale = false }) => {
  const { products: allProducts, categoryProducts, categoryTitle, saleProducts } = useSelector((state) => state.shop);
  const { id = "" } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [title, setTitle] = useState("All Products");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsByCategoryId(id));
    dispatch(fetchAllProducts());
  }, [id]);

  useEffect(() => {
    if (isCategory) {
      setProducts(categoryProducts);
    } else {
      if (onlySale) {
        setTitle("Discounted items");
        setProducts(saleProducts);
      } else {
        setProducts(allProducts);
        setTitle("All Products");
      }
    }
  }, [allProducts, categoryProducts, saleProducts, isCategory, onlySale]);

  useEffect(() => {
    setFilteredProducts(products);
    console.log(products);
  }, [products]);

  useEffect(() => {
    console.log("FILTERED", filteredProducts);
  }, [filteredProducts]);

  return (
    <main className={globalStyles.section__page}>
      <section className={globalStyles.section__block}>
        <div className={globalStyles.wrapper}>
          <SectionHeader showBtn={false}>{isCategory ? categoryTitle : title}</SectionHeader>

          <Filters products={products} setter={setFilteredProducts} onlySale={onlySale} />

          <ul className={`${globalStyles.list} ${globalStyles.wrapped__list}`}>
            {filteredProducts.map((item, key) => (
              <li key={key}>
                <ProductCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Products;
