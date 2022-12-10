import React from "react";
import Image from "next/image";
// images
import image1 from "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg";
import image2 from "../../assets/images/li-lin-UipyBJjHsvc-unsplash.jpg";
import image3 from "../../assets/images/nina-mercado-Y_t0n-T4H5M-unsplash.jpg";
import image4 from "../../assets/images/nina-mercado-ygl027z_Iw0-unsplash.jpg";
import ellipsebg from "../../assets/images/Ellipse 24.png";

const HeroSection = () => {
  return (
    <div className="hero row">
      <div className="hero__content">
        <h1 className="hero__content--heading">
          Value Proposition of <br></br>The company
        </h1>
        <p className="hero__content--subheading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          id.
        </p>
        <button className="btn hero__content--btn-viewProducts">
          View Products
        </button>
      </div>
      <div className="hero__graphics">
        <div className="hero__graphics--image-section">
          <div className="hero__graphics--image-section-wrap">
            <Image
              src={image1}
              className="hero__graphics--image-section-wrap-image image1"
              alt="wires in hand"
              layout="fill"
            />
          </div>

          <div className="hero__graphics--image-section-wrap">
            <Image
              src={image2}
              className="hero__graphics--image-section-wrap-image image2"
              alt="electrical wires"
              layout="fill"
            />
          </div>

          <div className="hero__graphics--image-section-wrap">
            <Image
              src={image3}
              className="hero__graphics--image-section-wrap-image image3"
              alt="person working with machine"
              layout="fill"
            />
          </div>

          <div className="hero__graphics--image-section-wrap">
            <Image
              src={image4}
              alt="wire bundles"
              className="hero__graphics--image-section-wrap-image image4"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
