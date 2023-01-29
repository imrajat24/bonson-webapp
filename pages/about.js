import Head from "next/head";
import Footer from "../components/Footer";
import BannerHead from "../components/about/BannerHead";
import Nav from "../components/Nav";
import Info from "../components/about/Info";
import MadeIndia from "../components/about/MadeIndia";
import Vision from "../components/about/Vision";
import Team from "../components/about/Team";
import Certificates from "../components/about/Certificates";
import OurHistory from "../components/about/OurHistory";
import CTASection from "../components/home/CTASection";

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
      <BannerHead />
      <Info />
      <MadeIndia />
      <Vision />
      {/* <Team /> */}
      <OurHistory />
      {/* <Certificates/> */}
      <CTASection />

      <Footer />
    </>
  );
}

export default AboutUs;
