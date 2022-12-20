import React from "react";
import Image from "next/image";
// images
import banner from "../../assets/images/about-us-banner.png";

const BannerHead = () => {
  return (
    <section className="bannerHead__wrap">
      {/* <Image src={banner}alt="industry image"layout="fill"objectFit="cover"quality={100}/> */}
      <div className="bannerHead row">
        <div className="hero__heading">
          <h1>About Us</h1>
          <p>Meet the winning teamMeet the winning teamMeet the winning team</p>
        </div>
      </div>
    </section>
  );
};

export default BannerHead;
