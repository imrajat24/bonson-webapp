import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Categories from "../components/Product/Categories";
import Products from "../components/Product/Products";

function ProductsPage({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Products - Bonson Pvt Ltd</title>
        <meta
          name="description"
          content=" this page shows all the products we are offering"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="nav__wrap">
        <Nav />
      </div>
      {data}

      <Products />
      <Categories />
      <Footer />
    </>
  );
}

export default ProductsPage;
