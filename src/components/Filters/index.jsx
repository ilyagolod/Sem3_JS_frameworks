import Input from "../UI/Input";

import styles from "./filters.module.scss";
import Dropdown from "../UI/Dropdown";
import { useEffect, useState } from "react";
import CheckBox from "../UI/CheckBox";

const SORT_TYPES = ["by default", "newest", "price:higt-low", "price:low-hight"];

const Filters = ({ onlySale = false, setter, products }) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [isSale, setIsSale] = useState(false);
  const [sortType, setSortType] = useState(SORT_TYPES[0]);

  useEffect(() => {
    let filteredItems = products.filter((item) => {
      const price = item.discont_price ?? item.price;
      const sale = isSale ? item.discont_price : item.price;

      return price > (priceFrom || 0) && price < (priceTo || 1000000000) && sale;
    });

    if (sortType !== SORT_TYPES[0]) {
      setter(
        filteredItems.sort((a, b) => {
          if (sortType === "newest") {
            return new Date(a.updatedAt) - new Date(b.updatedAt);
          }

          if (sortType === "price:higt-low") {
            return b[b.discont_price ? "discont_price" : "price"] - a[a.discont_price ? "discont_price" : "price"];
          } else {
            return a[a.discont_price ? "discont_price" : "price"] - b[b.discont_price ? "discont_price" : "price"];
          }
        })
      );
    } else {
      setter(filteredItems);
    }
  }, [sortType, priceFrom, priceTo, sortType, isSale, products]);

  return (
    <div className={styles.filters__container}>
      <div className={[styles.filter__option, styles.price__container].join(" ")}>
        <p>Price</p>
        <Input
          value={priceFrom}
          onChange={({ currentTarget }) => setPriceFrom(currentTarget.value)}
          placeholder={"from"}
        />
        <Input value={priceTo} onChange={({ currentTarget }) => setPriceTo(currentTarget.value)} placeholder={"to"} />
      </div>
      {!onlySale && (
        <CheckBox onChange={(value) => setIsSale(value)} label={"Discounted items"} />
        // <div className={styles.filter__option}>
        //   <p>Discounted items</p>
        //   <input onChange={({ currentTarget }) => setIsSale(currentTarget.checked)} type="checkbox" />
        // </div>
      )}

      <div className={styles.filter__option}>
        <p>Sorted</p>
        <Dropdown onChange={setSortType} values={SORT_TYPES} />
      </div>
    </div>
  );
};

export default Filters;
