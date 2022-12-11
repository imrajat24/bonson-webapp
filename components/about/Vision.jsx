import React from "react";
import Image from "next/image";

// images
import eye from "../../assets/icons/vision-eye-icon.svg";
const Vision = () => {
  return (
    <div className="vision__wrap">
      <div className="vision row">
        <div className="vision__card">
          <div className="vision__card__content">
            <h3 className="vision__card__content--heading">Our Vision</h3>
            <p className="vision__card_content--para">
              Donec odio ex, rhoncus non iaculis id, sagittis accumsanLorem
              ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tellus quam, gravida vitae bibendum nec, viverra eget erat. Donec
              odio ex, rhoncus non iaculis id, sagittis accumsan
            </p>
          </div>
          <div className="vision__card_graphic">
            <Image src={eye} alt="eye icon" />
          </div>
        </div>

        <div className="vision__card">
          <div className="vision__card__content">
            <h3 className="vision__card__content--heading">Our Vision</h3>
            <p className="vision__card_content--para">
              Donec odio ex, rhoncus non iaculis id, sagittis accumsanLorem
              ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tellus quam, gravida vitae bibendum nec, viverra eget erat. Donec
              odio ex, rhoncus non iaculis id, sagittis accumsan
            </p>
          </div>
          <div className="vision__card_graphic">
            <Image src={eye} alt="eye icon" />
          </div>
        </div>

        <div className="vision__card">
          <div className="vision__card__content">
            <h3 className="vision__card__content--heading">Our Vision</h3>
            <p className="vision__card_content--para">
              Donec odio ex, rhoncus non iaculis id, sagittis accumsanLorem
              ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tellus quam, gravida vitae bibendum nec, viverra eget erat. Donec
              odio ex, rhoncus non iaculis id, sagittis accumsan
            </p>
          </div>
          <div className="vision__card_graphic">
            <Image src={eye} alt="eye icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
