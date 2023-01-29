import React from "react";
import Image from "next/image";
// images
import banner from "../../assets/images/about-us-banner.png";

const BannerHead = () => {
  return (
    <div className="bannerHead__wrap">
      {/* <Image src={banner}alt="industry image"layout="fill"objectFit="cover"quality={100}/> */}
      <div className="bannerHead row">
        <div className="hero__heading">
          <h1>About Us</h1>
          <p>
            A leading provider of innovative and high-quality cable solutions,
            and a commitment to excellence to deliver reliable and
            cost-effective products to meet the evolving needs of our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerHead;
