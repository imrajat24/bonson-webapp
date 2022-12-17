import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import heroImg from "../../assets/images/heroImage.png";

const HeroSection = () => {
  return (
    <section className="hero row">
      <div className="hero__content">
        <div className="hero__heading hero__content--heading">
          <h1>Separate the risk with our cables</h1>
          <p className="hero__content--subheading">
            As an industrial cable supplier, we are renowned for our quality.
          </p>
        </div>
        <div className="hero__content--btn">
          <Link href={"/products"}>
            <button className="btn btn--primary">View Products</button>
          </Link>
        </div>
      </div>
      <div className="hero__graphics">
        <Image src={heroImg} alt="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;
