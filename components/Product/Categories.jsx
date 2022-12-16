import React from "react";
import Link from "next/link";
import Image from "next/image";

import categories from "./categories.json";

// images
import image1 from "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg";

const Categories = () => {
  const url = "category1";
  return (
    <div className="categoriesSection__wrap">
      <nav className="categories_nav">
        <ul>
          <Link href="/product">
            <li>category1</li>
          </Link>
          <li>category2</li>
          <li>category3</li>
          <li>category4</li>
        </ul>
      </nav>
      <div className="categoriesSection row">
        <div className="categoriesSection__info">
          <div className="categoriesSection__info__content">
            <div className="categoriesSection__info__content--heading">
              Category 1 Description
            </div>
            <div className="categoriesSection__info__content--para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis quidem voluptatem aliquam sint nisi iusto. Eveniet
              repellat quam vero.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis quidem voluptatem aliquam sint nisi iusto. Eveniet
              repellat quam vero.
            </div>
          </div>

          <div className="categoriesSection__info__graphics">
            <div className="categoriesSection__info__graphics--wrap">
              <Image
                src={image1}
                className="products__graphics-wrap-image image1"
                alt="wires in hand"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="products__card__container">
          {categories.map((category) => {
            // eslint-disable-next-line react/jsx-key
            return (
              // eslint-disable-next-line react/jsx-key

              <div className="product__card" key={category.id}>
                <div className="product__card__graphics">
                  <div className="product__card__graphics--wrap">
                    <Image
                      src={image1}
                      className="products__graphics-wrap-image image1"
                      alt="wires in hand"
                      layout="fill"
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
