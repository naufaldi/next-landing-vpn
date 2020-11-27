import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="bg-pink-500 w-full ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          enim obcaecati quos, earum maxime, dolorum recusandae totam optio
          minima facilis, reprehenderit sapiente illum laborum cum cupiditate
          maiores atque velit a.
        </div>
      </Layout>
    </div>
  );
}
