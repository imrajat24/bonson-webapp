import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import sliderImage1 from "../../assets/images/pvc-pipe.jpg";
import sliderImage2 from "../../assets/images/copper-winding-slider.webp";
import sliderImage3 from "../../assets/images/machine-slider.webp";
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
      para: "We constantly update our machinery to stay up with the latest industry trends and advancements, allowing us to remain competitive and ensuring that our production process is efficient and smooth.",
      img: sliderImage3,
    },
    {
      title: "High-speed extrusion lines",
      para: "High-speed extrusion lines are extremely efficient, producing a great volume of product in a short period of time. They are frequently utilised in our high-volume manufacturing applications where speed and volume are crucial.",
      img: sliderImage4,
    },
    {
      title: "Superior-quality products",
      para: "We feel that producing a lesser quantity of superior quality products is preferable to producing a bigger number of inferior",
      img: sliderImage5,
    },
  ];
  return (
    <section className="whyUs__wrap">
      <div className="whyUs row">
        <div className="section__heading">
          <h2 className="whyUs--heading">
            The Qualities that makes us stand out in the market
          </h2>
        </div>

        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
          autoPlay={true}
          infinite={true}
        >
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
