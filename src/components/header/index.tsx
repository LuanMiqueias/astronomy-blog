import React from "react";
import Link from "next/link";

import styles from "./style.module.css";
import { useRouter } from "next/router";
import { ICategories } from "../../types/categories";

interface IProps {
  logo: {
    url: string;
    altText: string;
  };
  categories: ICategories[];
}
export const Header: React.FC<IProps> = ({ categories, logo }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/">
          <a>
            <img src={logo?.url} alt={logo?.altText} className={styles.logo} />
          </a>
        </Link>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={router.asPath === "/" ? styles.activeLink : ""}>
              Home
            </a>
          </Link>
          {categories?.map((category, index) => {
            if (index > 3) return;
            return (
              <Link
                href={{
                  pathname: "/categories/[slug]",
                  query: { slug: category.slug },
                }}
                key={category.slug}
              >
                <a
                  className={
                    router.asPath === `/categories/${category.slug}`
                      ? styles.activeLink
                      : ""
                  }
                >
                  {category.name}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
