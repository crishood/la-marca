import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Trademark from "../components/Trademark";
import Where from "../components/Where";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>La Marca</title>
      </Head>
      <MobileNav />
      <Nav />
      <Hero />
      <Trademark />
      <Where />
      <Contact />
      <Footer />
    </div>
  );
}
