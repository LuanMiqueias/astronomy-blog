import Link from "next/link";
import React from "react";
import { ICategories } from "../../types/categories";
import styles from "./style.module.css";

interface IProps {
  category: ICategories;
}
export const CategoriesCardsItem: React.FC<IProps> = ({ category }) => {
  return (
    <Link
      href={{
        pathname: "/categories/[slug]",
        query: { slug: category.slug },
      }}
    >
      <a>
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${category.cover.url})`,
          }}
        >
          {category.name}
        </div>
      </a>
    </Link>
  );
};
