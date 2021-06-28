import Link from "next/link";
import React from "react";
import { IPosts } from "../../types/posts";
import styles from "./style.module.css";

interface IProps {
  post: IPosts;
}
export const PostCardItem: React.FC<IProps> = ({ post }) => {
  return (
    <Link
      href={{
        pathname: "/posts/[slug]",
        query: { slug: post.slug },
      }}
    >
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${post.cover?.url})`,
        }}
      >
        <Link
          href={{
            pathname: "/categories/[slug]",
            query: { slug: post.category.slug },
          }}
        >
          <a>
            <span className={styles.post_category}>{post.category.name}</span>
          </a>
        </Link>
        <div className={styles.text_block}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};
