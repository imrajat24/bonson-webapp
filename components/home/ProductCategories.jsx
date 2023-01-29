/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import arrow from "../../assets/icons/Vector.svg";
const ProductCategories = () => {
  // state to pass
  const [data, setData] = useState(2);

  const onClickHandler = (index) => {
    setData(index);
    console.log(index);
    let selected = "category2";
  };

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

          {uspData.map((category, index) => {
            return (
              <>
                {/* ---------------------card starts--------------------- */}
                <Link href={{ pathname: "/products", query: data }}>
                  <div
                    className="categories__section__card"
                    onClick={() => onClickHandler(index)}
                  >
                    <div className="imgContainer">
                      <Image
                        src={category.img}
                        objectFit="cover"
                        layout="fill"
                        className="categories__section__card--image"
                      />
                    </div>
                    <p className="categories__section__card--name">
                      {category.title}
                      <Image
                        src={arrow}
                        className="categories__section__card--arrow"
                      />
                    </p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;

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
    title: "Housewire & Industrial cables",
    para: "PVC is a versatile plastic that can be used for a wide range of applications, from pipes and tubing to windows and doors, and we produce high-quality PVC that fulfills our customer-specific requirements.",
    img: "https://res.cloudinary.com/dypttf0yz/image/upload/v1674747448/Bonson/housewireIndustrial/houseWire_main_stap9h.webp",
  },
  {
    title: "3 core flat submersible cables",
    para: "Our company manufactures its own copper products from beginning to end. The process begins with the mining of copper ore, which is then purified and smelted into pure copper, and it subsequently manufactures copper wire and tubing in a variety of sizes and shapes.",
    img: "https://res.cloudinary.com/dypttf0yz/image/upload/v1674749247/Bonson/3coreFlatSubmersible/3core_rkayuo.webp",
  },
  {
    title: "Multicore flexible cables",
    para: "We constantly update our machinery to stay up with the latest industry trends and advancements, allowing us to remain competitive and ensuring that our production process is efficient and smooth.",
    img: "https://res.cloudinary.com/dypttf0yz/image/upload/v1674748787/Bonson/multicoreFlexible/multicore_main_jhva3z.png",
  },
  {
    title: "Copper Wire",
    para: "High-speed extrusion lines are extremely efficient, producing a great volume of product in a short period of time. They are frequently utilised in our high-volume manufacturing applications where speed and volume are crucial.",
    img: "https://res.cloudinary.com/dypttf0yz/image/upload/v1674747691/Bonson/copper/copper_main_hezvvt.png",
  },
];
