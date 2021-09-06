import Link from "next/link";
import React from "react";
import { useFormatDate } from "../../hooks/formatDate";
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
      <a className={`${styles.container_link_post} animation_show`}>
        <div className={`${styles.container}`}>
          <div className={styles.text_block}>
            <div className={styles.post_header}>
              <p className={styles.category_name} style={{ color: `var(--${post.category.slug})` }}>{post.category.name}</p>
              <span className={styles.dot}></span>
              <p>{useFormatDate(post.published_at)}</p>
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
      </a>
    </Link>
  );
};

