import React from "react";
import Image from "next/image";
import Link from "next/link";

import mainImg from "../../assets/images/66kv product img.png";
const OtherProducts = () => {
  return (
    <div className="otherProduct__wrap">
      <div className="otherProduct row">
        <h2 className="otherProduct--heading">Other Products</h2>
        <div className="otherProduct__cardsWrap">
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
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
