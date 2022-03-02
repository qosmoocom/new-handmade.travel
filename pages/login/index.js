import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../../app/components/admin-components/Login";
export default function Index() {
  return (
    <section>
      <Head>
        <title>Are you Admin?</title>
      </Head>
      <Login />
    </section>
  );
}
