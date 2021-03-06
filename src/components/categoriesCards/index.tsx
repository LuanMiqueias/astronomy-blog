import React from "react";
import { ICategories } from "../../types/categories";
import { CategoriesCardsItem } from "../categoriesCardsItem";
import styles from "./style.module.css";

interface IProps {
  categories: ICategories[];
}
export const CategoriesCards: React.FC<IProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.container_categories_cards}>
          {categories.map((category) => {
            return (
              <CategoriesCardsItem key={category.slug} category={category} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
