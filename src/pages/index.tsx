import React from "react";
import { GetStaticProps } from "next";

import { api } from "../services/api";
import { GET_POSTS } from "../services/graphql/queries";
import styles from "../styles/pages/home.module.css";

import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";

import { CategoriesCards } from "../components/categoriesCards";
import { PostCards } from "../components/postCards";
import { IData, IDataCategories } from "../types/settings";
import { IPosts } from "../types/posts";

import settings from "../services/staticData/menuItems.json";

export const getStaticProps: GetStaticProps = async () => {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_POSTS },
  });
  const data: IPosts[] = responce.data.data;
  return {
    props: { data },
  };
};

const Home: React.FC<IData> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_sections}>
        <Hero hero={settings.data.setting.hero} />
        <CategoriesCards categories={settings.data.categories} />
        <PostCards posts={data.posts} limit={3} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
