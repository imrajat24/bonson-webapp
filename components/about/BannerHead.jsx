import React from "react";
import Image from "next/image";
// images
import banner from "../../assets/images/about-us-banner.png";

const BannerHead = () => {
  return (
    <div className="bannerHead__wrap">
      <Image src={banner} alt="industry image" quality={100} />
      <div className="bannerHead row">
        <h1 className="bannerHead--heading">About Us</h1>
        <p className="bannerHead--sub">
          Meet the winning teamMeet the winning teamMeet the winning team
        </p>
      </div>
    </div>
  );
};

export default BannerHead;
