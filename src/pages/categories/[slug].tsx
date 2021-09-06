import React from "react";
import { api } from "../../services/api";
import {
  GET_CATEGORIES,
  GET_POSTS_BY_CATEGORIES,
} from "../../services/graphql/queries";

import stylesContainer from "../../styles/pages/home.module.css";
import styles from "./style.module.css";
import { Header } from "../../components/header";
import { PostCards } from "../../components/postCards";
import { IPosts } from "../../types/posts";
import { ICategories } from "../../types/categories";
import { Hero } from "../../components/hero";
import { AllPosts } from "../../components/AllPosts";

interface IProps {
  data: {
    posts: IPosts[];
    categories: ICategories[];
  };
}

export const getStaticPaths = async () => {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_CATEGORIES },
  });
  const data: ICategories[] = responce.data.data.categories;
  const paths = data.map((category) => {
    return { params: { slug: category.slug } };
  });
  return {
    paths,
    fallback: true,
  };
};
export async function getStaticProps({ params }) {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_POSTS_BY_CATEGORIES(params.slug) },
  });
  const data: IProps = responce.data.data;
  return { props: { data } };
}

const Categories: React.FC<IProps> = ({ data }) => {
  return data ? (
    <div className={`${stylesContainer.container} animation_show`}>
      <div className={stylesContainer.container_sections}>
        {data.posts.length ? <AllPosts allowFilter={true} posts={data.posts} /> : <div className={styles.content_message}><h2>Não há posts nesta categoria.</h2></div>}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Categories;
