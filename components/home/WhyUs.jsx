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

  // ! data for usps
  const uspData = [
    {
      title: "randomTitle",
      para: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      img: sliderImage1,
    },
    {
      title: "randomTitle",
      para: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      img: sliderImage1,
    },
    {
      title: "randomTitle",
      para: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      img: sliderImage1,
    },
    {
      title: "randomTitle",
      para: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      img: sliderImage1,
    },
  ];
  return (
    <section className="whyUs__wrap">
      <div className="whyUs row">
        <div className="section__heading">
          <h2 className="whyUs--heading">
            The Qualities that makes us stand out in the marker
          </h2>
        </div>

        <Carousel responsive={responsive}>
          {uspData?.map((data, i) => {
            return (
              <div className="whyUs__slider" key={i}>
                <div className="whyUs__slider__content">
                  <h3>{data.title}</h3>
                  <p>{data.para}</p>
                </div>
                <div className="whyUs__slider__graphics">
                  <Image
                    src={data.img}
                    alt={`usp-image${i + 1}`}
                    className="whyUs__slider--image"
                    quality={100}
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default WhyUs;
