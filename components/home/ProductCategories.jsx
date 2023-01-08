/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import image4 from "../../assets/images/nina-mercado-ygl027z_Iw0-unsplash.jpg";
import arrow from "../../assets/icons/Vector.svg";
const ProductCategories = () => {
  // ! Object for carosuel reseponsiveness
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // ! data for usps
  const uspData = [
    {
      title: "Production of PVC in-house",
      para: "PVC is a versatile plastic that can be used for a wide range of applications, from pipes and tubing to windows and doors, and we produce high-quality PVC that fulfills our customer-specific requirements.",
      img: image4,
    },
    {
      title: "In-house copper drawing",
      para: "Our company manufactures its own copper products from beginning to end. The process begins with the mining of copper ore, which is then purified and smelted into pure copper, and it subsequently manufactures copper wire and tubing in a variety of sizes and shapes.",
      img: image4,
    },
    {
      title: "Modernized Machinery",
      para: "We constantly update our machinery to stay up with the latest industry trends and advancements, allowing us to remain competitive and ensuring that our production process is efficient and smooth.",
      img: image4,
    },
    {
      title: "High-speed extrusion lines",
      para: "High-speed extrusion lines are extremely efficient, producing a great volume of product in a short period of time. They are frequently utilised in our high-volume manufacturing applications where speed and volume are crucial.",
      img: image4,
    },
    {
      title: "Superior-quality products",
      para: "We feel that producing a lesser quantity of superior quality products is preferable to producing a bigger number of inferior",
      img: image4,
    },
  ];

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
                Housewire & Industrial Cables
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
                3 core flat submersible cables
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
                Multicore flexible cables
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
                Aluminium Multi core cable
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
