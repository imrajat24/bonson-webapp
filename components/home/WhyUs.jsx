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
      para: "In-House PVC production for both insulation and sheathing of our wires and cables allows us to exercise complete control over the quality and consistency of our product. The mindset of providing quality beyond national standards ensures that our products provide you the best performance and longevity, keeping in mind the safety of your family.",
      img: sliderImage1,
    },
    {
      title: "In-house copper drawing",
      para: "The conductor is the most important part of any wire and cable. With In-House copper wire,drawing and proper testing of incoming copper rod we ensure that no low-quality copper sets,foot in or out of our company. Drawing is the process of reducing the size of copper rod to the,desired size according to cable design. Online resistance annealers and offline annealers ensure,that fine copper wire is ductile and malleable enough for the process of bunching and extrusion,and also provide the desired flexibility to the wire and cable.",
      img: "https://res.cloudinary.com/dypttf0yz/image/upload/v1674750128/Bonson/copper/copper___20_s9z1yq.webp",
    },
    {
      title: "Modernized Machinery",
      para: "Modernized machinery provides numerous benefits including increased efficiency, improved,quality, and reduced wastage. Investing in state-of-the-art technology has not only given us a,competitive advantage in the market but also, has enabled us to provide higher-quality products,and exceptional customer service in comparison to competitors.",
      img: "https://res.cloudinary.com/dypttf0yz/image/upload/v1676127904/Bonson/OVEN_2_eqhxe7.jpg",
    },
    {
      title: "High-speed extrusion lines",
      para: "Extrusion is the most critical process in the manufacturing of Wires and Cables. High-Speed,extrusion lines provide improved efficiency, reduced wastage of raw materials, savings on time,and an enormous output of product. Our triple cross head extruder is a specialized piece of,technology that is designed to produced industrial cables at very high speed without,compromising with quality which is of utmost importance at our company.",
      img: sliderImage4,
    },
    {
      title: "Superior-quality products",
      para: "At our company, we place a strong emphasis on manufacturing and selling only high-quality,products that meet and exceed industry standards. We believe that delivering exceptional,products is essential to provide the best experience to our customers. That is why we are,dedicated to making market-ready products that meet rigorous quality control standards.",
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
