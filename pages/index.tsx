// import Image from "next/image";
// import { Inter } from "next/font/google";
import SeoHead from "@/components/seo-head";
import Layout from "@/components/layout/layout";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import Pricing from "@/components/pricing";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <SeoHead title="LaslesVPN Landing Page" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </main>
  );
}
