import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Carousel from "../components/Layout/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarpin - Security & Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Carousel />
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
