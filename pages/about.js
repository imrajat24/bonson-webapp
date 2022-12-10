import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import BannerHead from "../components/about/BannerHead";
import Nav from "../components/Nav";
import Info from "../components/about/Info";
import MadeIndia from "../components/about/MadeIndia";
import Vision from "../components/about/Vision";

function AboutUs() {
  return (
    <>
      <Head>
        <title>About-Bonson Pvt Ltd</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="nav__wrap">
        <Nav />
      </div>
      <BannerHead/>
      <Info/>
      <MadeIndia/>
      <Vision/>
    </>
  );
}

export default AboutUs;
