import React from "react";
import styles from "./style.module.css";

export const Filter = () => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSubimit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <footer className={styles.filter}>
      <form className={styles.search_bar} onSubmit={(e) => handleSubimit(e)}>
        <label htmlFor="search" className={styles.input_block}>
          <input type="text" placeholder="Search" name="search" />
          <button type="submit">
            <img src="/icons/search.svg" alt="" />
          </button>
        </label>
      </form>
    </footer>
  );
};
