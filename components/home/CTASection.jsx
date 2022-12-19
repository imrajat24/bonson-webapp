/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

// images
import cableImg from "../../assets/images/cta-image.png";
const CTASection = () => {
  return (
    <div className="ctaSection__wrap ">
      <div className="ctaSection row">
        <div className="ctaSection__content">
          <h2 className="ctaSection__content--heading">Cables CTA Heading</h2>
          <p className="ctaSection__content--para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            quibusdam.
          </p>
          <button className="ctaSection__content--btn-quote btn">
            Get a Quote
          </button>
        </div>
        <div className="img-container">
          <div className="img">
            <Image
              src={cableImg}
              objectPosition={"cover"}
              layout={"fill"}
              className="cableimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
