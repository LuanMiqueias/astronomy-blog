import Link from "next/link";
import React from "react";
import { IDataCategories } from "../../pages";
import styles from "./style.module.css";

interface IProps {
  category: IDataCategories;
}
export const CategoriesCardsItem: React.FC<IProps> = ({ category }) => {
  return (
    <Link
      href={{
        pathname: "/category/[slug]",
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
