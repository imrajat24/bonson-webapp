import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/home/HeroSection";
import OurProcess from "../components/home/OurProcess";
import WhyUs from "../components/home/WhyUs";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bonson Pvt Ltd</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="nav__wrap">
          <Nav />
        </div>
        <HeroSection />
        <WhyUs />
        <OurProcess />
      </main>
    </>
  );
}
