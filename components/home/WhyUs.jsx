import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import sliderImage1 from "../../assets/images/pvc-pipe.jpg";
import sliderImage2 from "../../assets/images/copper-winding-slider.webp";
// import sliderImage3 from "../../assets/images/machine-slider.webp";
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
      title: "In-house PVC production",
      para: "Incorporating in-house production of PVC for the insulator and sheathing of our wires and cables allows us to exert complete control over the quality and consistency of these critical components. This, in turn, ensures that our wires and cables meet the highest industry standards and provide reliable performance in a variety of applications and environments.",
      img: sliderImage1,
    },
    {
      title: "In-house copper drawing",
      para: "Copper drawing is an essential process in wire and cable manufacturing that involves reducing the diameter of copper wire to achieve a desired size and shape. By having its own copper drawing techniques, a company can exert complete control over the quality and consistency of the copper wire used in its products, resulting in reliable electrical performance.",
      img: "https://res.cloudinary.com/dypttf0yz/image/upload/v1674750128/Bonson/copper/copper___20_s9z1yq.webp",
    },
    {
      title: "Modernized Machinery",
      para: "Our modernized machinery provides numerous benefits, including increased efficiency, improved quality control, and flexibility. Investing in state-of-the-art technology has not only given us a competitive advantage in the market but has also been able to provide high-quality products and exceptional customer service while remaining ahead of the competition. ",
      img: "https://res.cloudinary.com/dypttf0yz/image/upload/v1676127904/Bonson/OVEN_2_eqhxe7.jpg",
    },
    {
      title: "High-speed extrusion lines",
      para: "High-speed extrusion is a critical production process in the manufacture of wire and cable products and it has allowed us to maximize production efficiency. Our triple crosshead extruder is a specialized piece of machinery that is designed to produce both household and industrial wire at extremely high speeds without compromising on safety and quality.",
      img: sliderImage4,
    },
    {
      title: "Superior-quality products",
      para: "At our company, we place a strong emphasis on providing high-quality products that meet and exceed industry standards. We believe that delivering exceptional products is essential to providing the best experience for our customers. That is why we are dedicated to making market-ready products that meet rigorous quality control standards.",
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
          className="whyUs__slider__wrap"
          autoPlaySpeed={5000}
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
                    height={500}
                    width={500}
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
