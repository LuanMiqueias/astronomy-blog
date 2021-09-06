import React from "react";
import { GetStaticProps } from "next";

import { api } from "../services/api";
import { GET_INITIAL_DATA } from "../services/graphql/queries";
import styles from "../styles/pages/home.module.css";

import { Hero } from "../components/hero";
import { Footer } from "../components/footer";

import { CategoriesCards } from "../components/categoriesCards";
import { PostCards } from "../components/postCards";
import { IPostsCards } from "../types/posts";

import settings from "../services/staticData/menuItems.json";
import { AllPosts } from "../components/AllPosts";
import { ICategories } from "../types/categories";

interface IDataAPI {
  posts: IPostsCards[];
  categories: ICategories[];
}
export const getStaticProps: GetStaticProps = async () => {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_INITIAL_DATA },
  });
  const data: IDataAPI[] = responce.data.data;
  return {
    props: { data },
  };
};

interface IProps {
  data: {
    posts: IPostsCards[];
    categories: ICategories[];
  };
}
const Home: React.FC<IProps> = ({ data }) => {
  return (
    <div className={`${styles.container} animation_show`}>
      <div className={styles.container_sections}>
        <Hero cover={settings.data.setting.hero.cover[0]}>
          <h1 className={styles.title}>
            Fique por dentro de tudo que acontece no mundo da
            <span>astronomia</span>
          </h1>
        </Hero>
        <div className={styles.content}>
          <CategoriesCards categories={settings.data.categories} />
        </div>
        <div className={styles.content}>
          <PostCards type="fullCover" posts={data.posts} limit={3} title="Ultimos posts" />
        </div>
        <AllPosts
          posts={data.posts}
          allowFilter={true}
          categories={data.categories}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
