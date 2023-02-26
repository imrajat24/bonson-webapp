import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import categories from "./categories.json";

const Categories = () => {
  return (
    <div className="categoriesSection__wrap ">
      {/* category navbar */}
      <div className="categories_nav " id="category-nav">
        <h2 className="">Product Categories</h2>
      </div>

      {/* category brief description */}
      <div className="products__card__container row">
        {categories.map((category) => {
          return (
            <div className="product__card" key={category.id}>
              <div className="product__card__graphics">
                <Image
                  src={category.images[0]}
                  className="products__graphics-wrap-image image1"
                  alt="wires in hand"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="product__card__content">
                <div className="top">
                  <h3 className="product__card__content--heading">
                    {category.categoryHeading}
                  </h3>

                  <p className="product__card__content--para">
                    {category.categoryDesc}
                  </p>
                </div>

                <div className="product__card__content__btn-wrap">
                  <Link href={`/product/${category.id}`}>
                    <button className="product__card__content__btn-viewmore btn">
                      View More
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button className="product__card__content__btn-enquire btn">
                      Enquire
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
