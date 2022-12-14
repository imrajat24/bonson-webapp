/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import image4 from "../../assets/images/nina-mercado-ygl027z_Iw0-unsplash.jpg";
import arrow from "../../assets/icons/Vector.svg";
const ProductCategories = () => {
  return (
    <div className="categories__wrap">
      <div className="categories row">
        <section className="categories__headingSection section__heading">
          <div className="categories__headingSection__content">
            <h2 className="categories__headingSection__content--heading">
              Product Categories
            </h2>
            <p className="categories__headingSection__content--para">
              The Products that are of best qualitty and at market affordable.
            </p>
          </div>
          <div className="categories__headingSection__btnWrap">
            <Link href={"/products"}>
              <button className="btn--exploreAll btn">Explore All</button>
            </Link>
          </div>
        </section>
        <div className="categories__section">
          {/* ---------------------card starts--------------------- */}

          <Link href={"products"}>
            <div className="categories__section__card">
              <div className="imgContainer">
                <Image
                  src={image4}
                  objectFit="cover"
                  layout="fill"
                  className="categories__section__card--image"
                />
              </div>

              <p className="categories__section__card--name">
                Product Category One
                <Image
                  src={arrow}
                  objectFit="cover"
                  className="categories__section__card--arrow"
                />
              </p>
            </div>
          </Link>

          {/* ---------------------card starts--------------------- */}
          <Link href={"products"}>
            <div className="categories__section__card">
              <div className="imgContainer">
                <Image
                  src={image4}
                  objectFit="cover"
                  layout="fill"
                  className="categories__section__card--image"
                />
              </div>
              <p className="categories__section__card--name">
                Product Category One
                <Image
                  src={arrow}
                  className="categories__section__card--arrow"
                />
              </p>
            </div>
          </Link>

          {/* ---------------------card starts--------------------- */}
          <Link href={"products"}>
            <div className="categories__section__card">
              <div className="imgContainer">
                <Image
                  src={image4}
                  objectFit="cover"
                  layout="fill"
                  className="categories__section__card--image"
                />
              </div>
              <p className="categories__section__card--name">
                Product Category One
                <Image
                  src={arrow}
                  className="categories__section__card--arrow"
                />
              </p>
            </div>
          </Link>

          {/* ---------------------card starts--------------------- */}
          <Link href={"products"}>
            <div className="categories__section__card">
              <div className="imgContainer">
                <Image
                  src={image4}
                  objectFit="cover"
                  layout="fill"
                  className="categories__section__card--image"
                />
              </div>
              <p className="categories__section__card--name">
                Product Category One
                <Image
                  src={arrow}
                  className="categories__section__card--arrow"
                />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
