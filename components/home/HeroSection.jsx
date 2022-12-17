import React from "react";
import Image from "next/image";
// images
import heroImg from "../../assets/images/heroImage.png";

const HeroSection = () => {
  return (
    <section className="hero row">
      <div className="hero__content">
        <div className="hero__heading hero__content--heading">
          <h1>Value proposition of the company</h1>
          <p className="hero__content--subheading">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            id.
          </p>
        </div>
        <div className="hero__content--btn">
          <button className="btn btn--primary">View Products</button>
        </div>
      </div>
      <div className="hero__graphics">
        <Image src={heroImg} alt="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;
