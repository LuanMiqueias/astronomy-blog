import React from "react";
import { GetStaticProps } from "next";

import { api } from "../services/api";
import { GET_SETTINGS } from "../services/graphql/queries";
import styles from "../styles/pages/home.module.css";

import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";

import { CategoriesCards } from "../components/categoriesCards";
import { PostCards } from "../components/postCards";

export interface IDataSettings {
  blogName: string;
  BlogDescription: string;
  logo: {
    url: string;
    altText: string;
  };
  menuLink?: [];
  hero?: {
    title?: string;
    cover?: {
      url: string;
    }[];
  };
}
export interface IDataCategories {
  name: string;
  slug: string;
  cover: {
    url: string;
  };
}
export interface IDataPosts {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  category: {
    name: string;
    slug: string;
  };
  tags: {
    name: string;
    slug: string;
  };
  cover: {
    url: string;
    altText: string;
  };
}
interface IData {
  data: {
    setting: IDataSettings;
    categories: IDataCategories[];
    posts: IDataPosts[];
  };
}
export const getStaticProps: GetStaticProps = async () => {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_SETTINGS },
  });
  const data: IData = responce.data.data;
  return {
    props: { data },
  };
};

const Home: React.FC<IData> = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.container}>
      <Header categories={data.categories} logo={data.setting.logo} />
      <div className={styles.container_sections}>
        <Hero hero={data.setting?.hero} />
        <CategoriesCards categories={data.categories} />
        <PostCards posts={data.posts} limit={3} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
