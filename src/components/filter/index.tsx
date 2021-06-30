import React from "react";
import { ICategories } from "../../types/categories";
import { IPosts } from "../../types/posts";
import styles from "./style.module.css";

interface IProps {
  categories?: ICategories[];
}
export const Filter: React.FC<IProps> = ({ categories }) => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSubimit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <section className={styles.filter}>
      <h3 className={styles.title_filter}>Filters</h3>

      <form className={styles.search_bar} onSubmit={(e) => handleSubimit(e)}>
        <label htmlFor="search" className={styles.input_block}>
          <input type="text" placeholder="Search" name="search" />
          <button type="submit">
            <img src="/icons/search.svg" alt="" />
          </button>
        </label>
      </form>
      {categories && (
        <div className={styles.categories_checklist}>
          {categories.map((item) => (
            <label
              htmlFor={item.slug}
              className={styles.input_block_checklist}
              key={item.slug}
            >
              <input
                type="checkbox"
                name={item.slug}
                id={item.slug}
                defaultChecked={false}
                disabled
              />
              {item.name}
            </label>
          ))}
        </div>
      )}
    </section>
  );
};
