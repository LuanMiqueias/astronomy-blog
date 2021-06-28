import React from "react";
import { GetStaticProps } from "next";
import { api } from "../../services/api";
import { GET_POSTS, GET_POSTS_SLUG } from "../../services/graphql/queries";
import styles from "../../styles/pages/home.module.css";
import { IDataPosts, IPosts } from "../../types/posts";

export const getStaticPaths = async () => {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_POSTS },
  });
  const posts: IPosts[] = responce.data.data.posts;
  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_POSTS_SLUG(params.slug as string) },
  });
  const data: IDataPosts = responce.data.data.posts[0];
  return {
    props: {
      data,
    },
  };
};
interface IData {
  data: IPosts;
}
const Posts: React.FC<IData> = ({ data }) => {
  return data ? (
    <div className={styles.container}>
      <div className={styles.container_sections}>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Posts;
