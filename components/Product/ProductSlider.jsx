import React from "react";
import Image from "next/image";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductSlider = ({ images }) => {
  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 4,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive1}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        className="product-images-slider"
      >
        {images.map((image, i) => {
          return (
            <div key={i}>
              <Image
                src={image}
                alt="wire img"
                height={80}
                width={80}
                layout="responsive"
              />
            </div>
          );
        })}
      </Carousel>

      <Carousel
        responsive={responsive2}
        arrows={false}
        swipeable={true}
        className="product-images-slider-thumbs"
      >
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="product-images-slider-thumbs-wrapper">
                <Image
                  src={image}
                  alt="wire img"
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </>
  );
};

export default ProductSlider;
