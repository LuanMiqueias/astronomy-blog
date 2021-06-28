import React from "react";
import { IDataCategories } from "../../types/settings";
import { CategoriesCardsItem } from "../categoriesCardsItem";
import styles from "./style.module.css";

interface IProps {
  categories: IDataCategories[];
}
export const CategoriesCards: React.FC<IProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Categories</h2>
        <nav className={styles.container_categories_cards}>
          {categories.map((category) => {
            return (
              <CategoriesCardsItem key={category.slug} category={category} />
            );
          })}
        </nav>
      </div>
    </div>
  );
};
