import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import About from "../components/About";
import Guidelines from "../components/Guidelines";
import Awards from "../components/Awards";
import Timeline from "../components/Timeline";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <SeoHead title="ERU Symposium 2024" />
      <Layout>
        <Hero />
        <About />
        <Timeline />
        <Guidelines />
        <Awards />
        <Team />
      </Layout>
    </>
  );
}
