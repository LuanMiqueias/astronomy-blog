import React from "react";
import { IDataCategories } from "../../pages";
import { CategoriesCardsItem } from "../categoriesCardsItem";
import styles from "./style.module.css";

interface IProps {
  categories: IDataCategories[];
}
export const CategoriesCards: React.FC<IProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {categories.map((category) => {
          return (
            <CategoriesCardsItem key={category.slug} category={category} />
          );
        })}
      </div>
    </div>
  );
};
