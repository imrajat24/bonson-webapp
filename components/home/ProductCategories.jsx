import React from "react";
import Image from "next/image";

import image4 from "../../assets/images/nina-mercado-ygl027z_Iw0-unsplash.jpg";
import arrow from "../../assets/icons/Vector.svg";
const ProductCategories = () => {
  return (
    <div className="categories__wrap">
      <div className="categories row">
        <div className="categories__headingSection">
          <div className="categories__headingSection__content">
            <h2 className="categories__headingSection__content--heading">
              Product Categories
            </h2>
            <p className="categories__headingSection__content--para">
              The Products that are of best qualitty and at market affordable.
            </p>
          </div>
          <div className="categories__headingSection__btnWrap">
            <button className="btn--exploreAll btn">Explore All</button>{" "}
          </div>
        </div>
        <div className="categories__section">
          <div className="categories__section__card">
            <Image
              src={image4}
              objectFit="cover"
              width={250}
              height={250}
              className="categories__section__card--image"
            />
            <p className="categories__section__card--name">
              Product Category One
            </p>
            <Image src={arrow} className="categories__section__card--arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;