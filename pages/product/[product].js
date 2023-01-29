import Head from "next/head";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import ProductPage from "../../components/Product/ProductPage";
import { useRouter } from "next/router";
function Product() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Product - Bonson Pvt Ltd</title>
        <meta
          name="description"
          content=" this page shows all the products we are offering"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="nav__wrap">
        <Nav />
      </div>

      <ProductPage id={router.query} />
      <Footer />
    </>
  );
}

export default Product;
