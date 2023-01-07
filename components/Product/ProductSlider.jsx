import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// images
import mainImg from "../../assets/images/66kv product img.png";
import mainImg2 from "../../assets/images/66kv product img - Copy.png";
import mainImg3 from "../../assets/images/66kv product img - Copy - Copy.png";
import { Navigation, Thumbs } from "swiper";

const ProductSlider = () => {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        <SwiperSlide>
          <Image src={mainImg} alt="wire img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={mainImg2} alt="wire img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={mainImg3} alt="wire img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={mainImg} alt="wire img" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <Image src={mainImg} alt="wire img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <Image src={mainImg2} alt="wire img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <Image src={mainImg3} alt="wire img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
