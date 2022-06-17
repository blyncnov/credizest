import React from "react";
import Head from "next/head";

import Header from "../Layout/Header";

export default function Home({ news }) {
  return (
    <>
      <Head>
        <title>Credizest | Fintech</title>
        <meta name="Credizest | Fintech" content=" Credizest | Fintech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
