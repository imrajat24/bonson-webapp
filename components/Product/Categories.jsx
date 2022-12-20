import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import categories from "./categories.json";

// images
import image1 from "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg";

const Categories = () => {
  // state for switching categories
  const [activeCat, setActiveCat] = useState("category1");
  // variables for switching categories
  const cat1 = () => setActiveCat("category1");
  const cat2 = () => setActiveCat("category2");
  const cat3 = () => setActiveCat("category3");
  const cat4 = () => setActiveCat("category4");

  //category object
  const categoriesInfo = [
    {
      category: "category1",
      categoryHeading: "Category 1 Description",
      categoryDesc:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo blanditiis quidem voluptatem aliquam sint nis iusto. Eveniet repellat quam vero.",
      categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
    },

    {
      category: "category2",
      categoryHeading: "Category 2 Description",
      categoryDesc:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo blanditiis quidem voluptatem aliquam sint nis iusto. Eveniet repellat quam vero.",
      categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
    },

    {
      category: "category3",
      categoryHeading: "Category 3 Description",
      categoryDesc:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo blanditiis quidem voluptatem aliquam sint nis iusto. Eveniet repellat quam vero.",
      categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
    },

    {
      category: "category4",
      categoryHeading: "Category 4 Description",
      categoryDesc:
        "4 Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo blanditiis quidem voluptatem aliquam sint nis iusto. Eveniet repellat quam vero.",
      categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
    },
  ];

  // function return statement
  return (
    <div className="categoriesSection__wrap">
      {/* category navbar */}
      <nav className="categories_nav">
        <ul>
          <li onClick={cat1}>category1</li>
          <li onClick={cat2}>category2</li>
          <li onClick={cat3}>category3</li>
          <li onClick={cat4}>category4</li>
        </ul>
      </nav>

      {/* category brief description */}
      <div className="categoriesSection row">
        {categoriesInfo
          .filter((categoryInfo) => categoryInfo.category == activeCat)
          .map((categoryInfo) => {
            return (
              <div
                className="categoriesSection__info"
                key={categoriesInfo.category}
              >
                <div className="categoriesSection__info__content">
                  <div className="categoriesSection__info__content--heading">
                    {categoryInfo.categoryHeading}
                  </div>
                  <div className="categoriesSection__info__content--para">
                    {categoryInfo.categoryDesc}
                  </div>
                </div>

                <div className="categoriesSection__info__graphics">
                  <div className="categoriesSection__info__graphics--wrap">
                    <Image
                      src={image1}
                      className="products__graphics-wrap-image image1"
                      alt="wires in hand"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}

        {/* product cards sorted according to catrgories */}
        <div className="products__card__container">
          {/* filtering data according to category and then mapping the same category ones */}
          {categories
            .filter((category) => category.category == activeCat)
            .map((category) => {
              return (
                <div className="product__card" key={category.id}>
                  <div className="product__card__graphics">
                    <div className="product__card__graphics--wrap">
                      <Image
                        src={image1}
                        className="products__graphics-wrap-image image1"
                        alt="wires in hand"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>

                  <div className="product__card__content">
                    <h3 className="product__card__content--heading">
                      {category.productName}
                    </h3>

                    <p className="product__card__content--para">
                      {category.productDesc}
                    </p>
                    <br />

                    <h4 className="product__card__content--subheading">
                      Basic Technical Info
                    </h4>
                    <p className="product__card__content--techinfo">
                      {category["techInfo-1"]}
                    </p>
                    <p className="product__card__content--techinfo">
                      {category["techInfo-2"]}
                    </p>

                    <div className="product__card__content__btn-wrap">
                      <Link href={category["btn-viewMore"]}>
                        <button className="product__card__content__btn-viewmore btn">
                          View More
                        </button>
                      </Link>
                      <button className="product__card__content__btn-enquire btn">
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
