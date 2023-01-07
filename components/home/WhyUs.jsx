import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import sliderImage1 from "../../assets/images/pvc-pipe.jpg";
import sliderImage2 from "../../assets/images/copper-slide.jpg";
import sliderImage3 from "../../assets/images/machine-slider.jpg";
import sliderImage4 from "../../assets/images/motor-slider.jpg";
import sliderImage5 from "../../assets/images/wireProduct-slider.jpg";

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
      title: "Production of PVC in-house",
      para: "PVC is a versatile plastic that can be used for a wide range of applications, from pipes and tubing to windows and doors, and we produce high-quality PVC that fulfills our customer-specific requirements.",
      img: sliderImage1,
    },
    {
      title: "In-house copper drawing",
      para: "Our company manufactures its own copper products from beginning to end. The process begins with the mining of copper ore, which is then purified and smelted into pure copper, and it subsequently manufactures copper wire and tubing in a variety of sizes and shapes.",
      img: sliderImage2,
    },
    {
      title: "Modernized Machinery",
      para: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      img: sliderImage3,
    },
    {
      title: "High-speed extrusion lines",
      para: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      img: sliderImage4,
    },
    {
      title: "Superior-quality products",
      para: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      img: sliderImage5,
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
