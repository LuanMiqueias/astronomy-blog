import Link from "next/link";
import React from "react";
import { IPostsCards } from "../../types/posts";
import styles from "./style.module.css";

interface IProps {
  post: IPostsCards;
}
export const PostCardItem: React.FC<IProps> = ({ post }) => {
  return (
    <Link
      href={{
        pathname: "/posts/[slug]",
        query: { slug: post.slug },
      }}
    >
      <div className={styles.container}>
        <div className={styles.text_block}>
          <div className={styles.post_header}>
            <p>{formateDate(post.published_at)}</p>
            <span className={styles.dot}></span>
            <Link
              href={{
                pathname: "/categories/[slug]",
                query: { slug: post.category.slug },
              }}
            >
              <a className={styles.post_category}>{post.category.name}</a>
            </Link>
          </div>
          <div className={styles.text}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        </div>
        <div className={styles.image_post}>
          <img src={post.cover.url} alt={post.cover.altText} />
        </div>
      </div>
    </Link>
  );
};

function formateDate(date) {
  const newDate = new Date(date);

  let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(newDate);
  let month = new Intl.DateTimeFormat("en", { month: "short" }).format(newDate);
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(newDate);

  return `${day} ${month} ${year}`;
}
