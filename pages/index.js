import Head from "next/head";
import Image from "next/image";
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
      </main>
    </>
  );
}
