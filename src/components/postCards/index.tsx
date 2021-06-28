import React from "react";
import { IPostsCards } from "../../types/posts";
import { PostCardFullCover } from "../postCardFullCover";
import { PostCardItem } from "../postCardItem";
import styles from "./style.module.css";

interface IProps {
  posts: IPostsCards[];
  limit?: number;
  title?: string;
  type: "default" | "fullCover";
}
export const PostCards: React.FC<IProps> = ({
  posts,
  limit,
  title,
  type = "default",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {title && <h2>{title}</h2>}
        <nav className={styles.container_posts_cards}>
          {posts.map((post, index) => {
            if (limit && index >= limit) return;

            if (type === "fullCover") {
              return <PostCardFullCover key={post.slug} post={post} />;
            } else {
              return <PostCardItem key={post.slug} post={post} />;
            }
          })}
        </nav>
      </div>
    </div>
  );
};
