import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';
import ItemList from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({list}) {
  return (
    <div>
      <Head>
        <title>HOME | 제이키</title>
        <meta name="description" content="제이키 홈입니다."></meta>
      </Head>      
      <>
        <Header as="h3" style={{paddingTop: 40}}>베스트 상품</Header>
        <Divider/>
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{paddingTop: 40}}>신상품</Header>
        <Divider/>
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}