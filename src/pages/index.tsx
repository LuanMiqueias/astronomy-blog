import React from "react";
import { GetStaticProps } from "next";

import { api } from "../services/api";
import { GET_LAST_POSTS, GET_POSTS } from "../services/graphql/queries";
import styles from "../styles/pages/home.module.css";

import { Hero } from "../components/hero";
import { Footer } from "../components/footer";

import { CategoriesCards } from "../components/categoriesCards";
import { PostCards } from "../components/postCards";
import { IPostsCards } from "../types/posts";

import settings from "../services/staticData/menuItems.json";

export const getStaticProps: GetStaticProps = async () => {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_LAST_POSTS },
  });
  const data: IPostsCards[] = responce.data.data;
  return {
    props: { data },
  };
};

interface IProps {
  data: {
    posts: IPostsCards[];
  };
}
const Home: React.FC<IProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_sections}>
        <Hero cover={settings.data.setting.hero.cover[0]}>
          <h1 className={styles.title}>
            Fique por dentro de tudo que acontece no mundo da{" "}
            <span>astronomia</span>
          </h1>
        </Hero>
        <CategoriesCards categories={settings.data.categories} />
        <PostCards posts={data.posts} limit={3} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
