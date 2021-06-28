import React from "react";
import { IPostsCards } from "../../types/posts";
import { Filter } from "../filter";
import { PostCardFullCover } from "../postCardFullCover";
import { PostCardItem } from "../postCardItem";
import { PostCards } from "../postCards";
import styles from "./style.module.css";

interface IProps {
  posts: IPostsCards[];
  allowFilter?: boolean;
}
export const AllPosts: React.FC<IProps> = ({ posts, allowFilter = false }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={`${styles.container_allPosts} ${
            allowFilter
              ? styles.container_allPosts_two_columns
              : styles.container_allPosts_one_column
          }`}
        >
          <PostCards posts={posts} type="default" />
          {allowFilter && <Filter />}
        </div>
      </div>
    </div>
  );
};
