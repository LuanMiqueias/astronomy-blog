import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import { Header } from "../components/header";
import settings from "../services/staticData/menuItems.json";

function MyApp({ data, Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Astronomy news</title>
        <meta name="theme-color" content="#03141B" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header
        categories={settings.data.categories}
        logo={settings.data.setting.logo}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
