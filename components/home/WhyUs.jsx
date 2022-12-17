import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import sliderImage1 from "../../assets/images/Rectangle 18@2x.png";
const WhyUs = () => {
  // ! Object for carosuel reseponsiveness
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="whyUs__wrap">
      <div className="whyUs row">
        <div className="section__heading">
          <h2 className="whyUs--heading">
            The Qualities that makes us stand out in the marker
          </h2>
        </div>
        <div className="whyUs__slider">
          <div className="whyUs__slider__content">
            <h3 className="whyUs__slider__content--heading">
              Exclusive Dealers
            </h3>
            <p className="whyUs__slider__content--copy">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              porro?
            </p>
          </div>
          <Image
            src={sliderImage1}
            alt="dealership image"
            width={750}
            height={330}
            className="whyUs__slider--image"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
