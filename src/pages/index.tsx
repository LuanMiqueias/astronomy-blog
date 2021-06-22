import React from "react";
import { GetStaticProps } from "next";

import { api } from "../services/api";
import { GET_SETTINGS } from "../services/graphql/queries";
import styles from "../styles/pages/home.module.css";

import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";

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
}
interface IData {
  data: {
    setting: IDataSettings;
    categories: IDataCategories[];
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
  React.useEffect(() => {}, []);
  console.log(data.setting);

  return (
    <div className={styles.container}>
      <Header categories={data.categories} logo={data.setting.logo} />
      {data.setting.hero && <Hero hero={data.setting.hero} />}
      <Footer />
    </div>
  );
};

export default Home;
