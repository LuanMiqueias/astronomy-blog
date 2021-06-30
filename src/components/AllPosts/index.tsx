import React from "react";
import { ICategories } from "../../types/categories";
import { IPostsCards } from "../../types/posts";
import { Filter } from "../filter";
import { PostCardFullCover } from "../postCardFullCover";
import { PostCardItem } from "../postCardItem";
import { PostCards } from "../postCards";
import styles from "./style.module.css";

interface IProps {
  categories?: ICategories[];
  posts: IPostsCards[];
  allowFilter?: boolean;
}
export const AllPosts: React.FC<IProps> = ({
  categories,
  posts,
  allowFilter = false,
}) => {
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
          {allowFilter && <Filter categories={categories && categories} />}
        </div>
      </div>
    </div>
  );
};
