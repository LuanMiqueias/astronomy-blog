import React from "react";
import Link from "next/link";

import { IDataCategories } from "../../pages";
import styles from "./style.module.css";
import { useRouter } from "next/router";
interface IProps {
  logo: {
    url: string;
    altText: string;
  };
  categories: IDataCategories[];
}
export const Header: React.FC<IProps> = ({ categories, logo }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={logo?.url} alt={logo?.altText} className={styles.logo} />
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={router.pathname === "/" ? styles.activeLink : ""}>
              Home
            </a>
          </Link>
          {categories.map((category, index) => {
            if (index > 4) return;
            return (
              <Link
                href={{
                  pathname: "/categories/[slug]",
                  query: { slug: category.slug },
                }}
                key={category.slug}
              >
                {category.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
