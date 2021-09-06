import React from "react";
import { GetStaticProps } from "next";
import { api } from "../../services/api";
import { GET_POSTS, GET_POSTS_SLUG } from "../../services/graphql/queries";
import { IDataPosts, IPosts } from "../../types/posts";

import styles from "./style.module.css";
import Link from "next/link";
import { useFormatDate } from "../../hooks/formatDate";
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
    <div className={`${styles.container} animation_show`}>
      <img src={data.cover.url} alt="" className={styles.post_cover} />
      <div className={styles.content}>
        <div className={styles.container_post_content}>
          <header className={styles.post_header}>
            <Link href={`/categories/${data.category.slug}`}>
              <a className={styles.post_category} style={{ backgroundColor: `var(--${data.category.slug})` }}>
                {data.category.name}
              </a>
            </Link>
            <div className={styles.post_date}>
              {useFormatDate(data.published_at)} - <a className={styles.post_author}>
                <Link href={`/authors/${data.author.slug}`}>
                  {data.author.name}
                </Link>
              </a>
            </div>
          </header>
          <h1>{data.title}</h1>
          <div className={styles.content_text}>
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Posts;
