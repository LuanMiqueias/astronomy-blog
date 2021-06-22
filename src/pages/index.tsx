import { GetStaticProps } from "next";
import React from "react";
import { api } from "../services/api";
import { GET_SETTINGS } from "../services/graphql/queries";

export interface ISettings {
  blogName: string;
  BlogDescription: string;
  logo: {
    url: string;
    altText: string;
  };
  menuLink?: [];
  hero?: {
    title?: string;
    subtitle?: string;
    cover?: {
      url: string;
      altText: string;
    };
  };
}
export interface IDataSettings {
  setting: {
    blogName: string;
    BlogDescription: string;
    logo: {
      url: string;
      altText: string;
    };
    menuLink?: [];
    hero?: {
      title?: string;
      subtitle?: string;
      cover?: {
        url: string;
        altText: string;
      };
    };
  };
}
interface IProps {
  settings: ISettings;
}
export const getStaticProps: GetStaticProps = async () => {
  const responce = await api({
    url: "",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { ...GET_SETTINGS },
  });
  const data: IDataSettings = responce.data.data;

  return {
    props: { settings: data.setting },
  };
};

const Home: React.FC<IProps> = ({ settings }) => {
  React.useEffect(() => {
    console.log(settings);
  }, []);

  return <div>Home</div>;
};

export default Home;
