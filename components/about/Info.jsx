import React from "react";
import Image from "next/image";

// images
import mainImg from "../../assets/images/about-us-main-img.png";
const Info = () => {
  return (
    <div className="info row">
      <p className="info--para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tellus quam, gravida vitae bibendum nec, viverra eget erat. Donec odio
        ex, rhoncus non iaculis id, sagittis accumsan.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Phasellus tellus quam, gravida vitae
        bibendum nec, viverra eget erat. Donec odio ex, rhoncus non iaculis id,
        sagittis accumsanLorem ipsum dolor sit amet, consectetur adipiscing
        elit. Phasellus tellus quam, gravida vitae bibendum nec, viverra eget
        erat. Donec odio ex, rhoncus non iaculis id, sagittis accumsan. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus
        quam, gravida vitae bibendum nec, viverra eget erat. Donec odio ex,
        rhoncus non iaculis id, sagittis accumsan.
      </p>
      <div className="info__imgContainer">
        <Image
          src={mainImg}
          alt="warehouse image"
          className="info--img"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Info;
