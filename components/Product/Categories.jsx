import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import categories from "./categories.json";

// images
import image1 from "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg";

const Categories = () => {
  const router = useRouter();
  const url = router.asPath;
  console.log(url);

  // state to check which category is selected
  const [activeCat, setActiveCat] = useState({
    activeObject: { id: 1 },
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
    activeCategory: "category3",
    objectCat: [
      "category1",
      "category2",
      "category3",
      "category4",
      "category5",
      "category6",
    ],
  });

  // toggle function to change the object of active state
  const toggleActive = (index) => {
    setActiveCat({
      ...activeCat,
      activeObject: activeCat.objects[index],
      activeCategory: activeCat.objectCat[index],
    });
  };

  useEffect(() => {
    toggleActiveStyles(2);
    if (url === "/products?1") {
      console.log("first");
    } else if (url === "/products?2") {
      console.log("second");
    } else if (url === "/products?3") {
      console.log("third");
    } else if (url === "/products?4") {
      console.log("fourth");
    }
  });

  // function to toggle the active and inactive classNames
  const toggleActiveStyles = (index) => {
    if (activeCat.objects[index] === activeCat.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  };
  // function to change the active class
  // const onClickHandler = (category) => {};

  // function return statement
  return (
    <div className="categoriesSection__wrap">
      {/* category navbar */}
      <nav className="categories_nav" id="category-nav">
        <ul>
          <li
            className={toggleActiveStyles(0)}
            onClick={() => {
              toggleActive(0);
            }}
          >
            Housewire & Industrial Cables
          </li>
          <li
            className={toggleActiveStyles(1)}
            onClick={() => {
              toggleActive(1);
            }}
          >
            3 core flat submersible cables
          </li>
          <li
            className={toggleActiveStyles(2)}
            onClick={() => {
              toggleActive(2);
            }}
          >
            Multicore flexible cables
          </li>
          <li
            className={toggleActiveStyles(3)}
            onClick={() => {
              toggleActive(3);
            }}
          >
            Aluminium Multi core cable
          </li>
          <li
            className={toggleActiveStyles(4)}
            onClick={() => {
              toggleActive(4);
            }}
          >
            Copper Wire
          </li>
          <li
            className={toggleActiveStyles(5)}
            onClick={() => {
              toggleActive(5);
            }}
          >
            Submersible Poly Winding Wire
          </li>
        </ul>
      </nav>

      {/* category brief description */}
      <div className="categoriesSection row">
        {categoriesInfo
          .filter(
            (categoryInfo) => categoryInfo.category == activeCat.activeCategory
          )
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
            .filter((category) => category.category == activeCat.activeCategory)
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

                    {/* <h4 className="product__card__content--subheading">
                      Basic Technical Info
                    </h4>
                    <p className="product__card__content--techinfo">
                      {category["techInfo-1"]}
                    </p>
                    <p className="product__card__content--techinfo">
                      {category["techInfo-2"]}
                    </p> */}

                    <div className="product__card__content__btn-wrap">
                      <Link href={`/product/${category["btn-viewMore"]}`}>
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

//category object
const categoriesInfo = [
  {
    category: "category1",
    categoryHeading: "Housewire & Industrial Cables",
    categoryDesc:
      "  A home's electrical outlets and fixtures are connected via house wire. From 0.5 square millimeters to 70 square millimeters, a variety of sizes are provided. High-quality copper is used in the construction of house wire, which is intended for reliable operation.",
    categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
  },

  {
    category: "category2",
    categoryHeading: "3 core flat submersible cables",
    categoryDesc:
      "The three-core flat submersible cables are available in a range of sizes from 1.5 sq. mm. to 25 sq. mm. They are built to withstand the rigors of submersion. These cables are perfect for a range of applications, including submersible water pumping.",
    categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
  },

  {
    category: "category3",
    categoryHeading: "Multicore flexible cables",
    categoryDesc:
      "3 Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo blanditiis quidem voluptatem aliquam sint nis iusto. Eveniet repellat quam vero.",
    categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
  },

  {
    category: "category4",
    categoryHeading: "Aluminium Multi core cable",
    categoryDesc:
      "4 Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo blanditiis quidem voluptatem aliquam sint nis iusto. Eveniet repellat quam vero.",
    categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
  },
  {
    category: "category5",
    categoryHeading: "Copper Wire",
    categoryDesc:
      "We also deal in bare copper wire, annealed bare copper wire, and fine copper wire which is used in industries as a raw material for further processing. We also have a provision for an online resistance annealer to double anneal the copper to provide even higher softness in our copper. We may also offer Bunched copper as per your requirement.",
    categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
  },
  {
    category: "category6",
    categoryHeading: "Submersible Poly Winding Wire",
    categoryDesc:
      "Submersible Poly Winding Wire is a common type of insulated wire used in electrical motors. This wire is resistant to water and other liquids, making it an excellent choice for submersible pumps and motors. To satisfy the needs of various electrical systems, the wire is offered in a variety of gauges and conductor diameters.",
    categoryImg: "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg",
  },
];
