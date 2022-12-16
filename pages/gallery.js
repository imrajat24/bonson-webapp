import Head from "next/head";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery/Gallery";
import Nav from "../components/Nav";
import ProductPage from "../components/Product/ProductPage";

function GalleryShow() {
  return (
    <>
      <Head>
        <title>Contact - Bonson Pvt Ltd</title>
        <meta
          name="description"
          content=" this page shows all the products we are offering"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="nav__wrap">
        <Nav />
      </div>
      <Gallery />
      <Footer />
    </>
  );
}

export default GalleryShow;
