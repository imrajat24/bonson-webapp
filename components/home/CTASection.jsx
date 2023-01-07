/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

// images
import cableImg from "../../assets/images/cta-image.png";
import Link from "next/link";
const CTASection = () => {
  return (
    <div className="ctaSection__wrap ">
      <div className="ctaSection row">
        <div className="ctaSection__content">
          <h2 className="ctaSection__content--heading">Cables CTA Heading</h2>
          <p className="ctaSection__content--para">
            When it comes to electrical cables, using high-quality cables is the
            key to safety.
          </p>
          <Link href="/contact">
            <button className="ctaSection__content--btn-quote btn">
              Get a Quote
            </button>
          </Link>
        </div>
        <div className="img-container">
          <div className="img">
            <Image
              src={cableImg}
              objectPosition={"cover"}
              className="cableimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
