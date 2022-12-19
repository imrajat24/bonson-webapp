import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import mainImg from "../../assets/images/66kv product img.png";
const OtherProducts = () => {
  // ! Object for carosuel responsiveness
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobileMid: {
      breakpoint: { max: 580, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 430, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="otherProduct__wrap">
      <div className="otherProduct row">
        <h2 className="otherProduct--heading">Other Products</h2>

        <Carousel responsive={responsive}>
          {/* card starts */}

          {/* card starts */}
          <Link href="https://drive.google.com/file/d/1u7qsSPsqWDug2q6Ap4UuFcEufypGiMrw/view?usp=sharing">
            <div className="otherProduct__card">
              <div className="otherProduct__card--imgContainer">
                <Image
                  src={mainImg}
                  alt="otherProduct person"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="otherProduct__card__content">
                <h3 className="otherProduct__card__content--name">
                  otherProduct
                </h3>
                <p className="otherProduct__card__content--issueDate">
                  issueDate in company
                </p>
                <p className="otherProduct__card__content--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus tellus quam, gravida vitae
                </p>
              </div>
            </div>
          </Link>

          {/* card starts */}
          <div className="otherProduct__card">
            <div className="otherProduct__card--imgContainer">
              <Image
                src={mainImg}
                alt="otherProduct person"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="otherProduct__card__content">
              <h3 className="otherProduct__card__content--name">
                otherProduct
              </h3>
              <p className="otherProduct__card__content--issueDate">
                issueDate in company
              </p>
              <p className="otherProduct__card__content--para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tellus quam, gravida vitae
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="otherProduct__card">
            <div className="otherProduct__card--imgContainer">
              <Image
                src={mainImg}
                alt="otherProduct person"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="otherProduct__card__content">
              <h3 className="otherProduct__card__content--name">
                otherProduct
              </h3>
              <p className="otherProduct__card__content--issueDate">
                issueDate in company
              </p>
              <p className="otherProduct__card__content--para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tellus quam, gravida vitae
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="otherProduct__card">
            <div className="otherProduct__card--imgContainer">
              <Image
                src={mainImg}
                alt="otherProduct person"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="otherProduct__card__content">
              <h3 className="otherProduct__card__content--name">
                otherProduct
              </h3>
              <p className="otherProduct__card__content--issueDate">
                issueDate in company
              </p>
              <p className="otherProduct__card__content--para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tellus quam, gravida vitae
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="otherProduct__card">
            <div className="otherProduct__card--imgContainer">
              <Image
                src={mainImg}
                alt="otherProduct person"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="otherProduct__card__content">
              <h3 className="otherProduct__card__content--name">
                otherProduct
              </h3>
              <p className="otherProduct__card__content--issueDate">
                issueDate in company
              </p>
              <p className="otherProduct__card__content--para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tellus quam, gravida vitae
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default OtherProducts;
