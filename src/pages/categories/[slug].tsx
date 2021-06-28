import React from "react";
import { api } from "../../services/api";
import { GET_CATEGORIES } from "../../services/graphql/queries";
import styles from "../../styles/pages/home.module.css";
import { IData, IDataCategories } from "../../types/settings";
import { Header } from "../../components/header";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export async function getStaticProps({ params }) {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_CATEGORIES },
  });
  const data: IDataCategories = responce.data.data;
  return { props: { data } };
}
const Categories: React.FC<IData> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_sections}></div>
    </div>
  );
};

export default Categories;
