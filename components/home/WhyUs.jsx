import React from "react";
import Image from "next/image";

// images
import sliderImage1 from "../../assets/images/Rectangle 18@2x.png";
const WhyUs = () => {
  return (
    <div className="whyUs__wrap ">
      <div className="whyUs row">
        <h2 className="whyUs--heading">
          The Qualities that makes us stand out in the marker
        </h2>
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
    </div>
  );
};

export default WhyUs;
