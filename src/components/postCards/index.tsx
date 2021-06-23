import React from "react";
import { IDataPosts } from "../../pages";
import { PostCardItem } from "../postCardItem";
import styles from "./style.module.css";

interface IProps {
  posts: IDataPosts[];
  limit?: number;
}
export const PostCards: React.FC<IProps> = ({ posts, limit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Posts</h2>
        <nav className={styles.container_posts_cards}>
          {posts.map((post, index) => {
            if (limit && index >= limit) return;
            return <PostCardItem key={post.slug} post={post} />;
          })}
        </nav>
      </div>
    </div>
  );
};
