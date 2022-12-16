import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import image1 from "../../assets/images/dollar-gill-VW1xJfuOj2g-unsplash.jpg";

const Products = () => {
  return (
    <div className="products__wrap">
      <div className="products row">
        <div className="products__content">
          <h1 className="products__content--heading">Product Range Offered</h1>
          <p className="products__content--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            impedit exercitationem doloremque quidem dicta harum quaerat
            mollitia asperiores? Iste praesentium sint numquam hic adipisci
            mollitia nemo beatae sit dignissimos eos.
          </p>
          <p className="products__content--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            impedit exercitationem doloremque quidem dicta harum quaerat
            mollitia asperiores? Iste praesentium sint numquam hic adipisci
            mollitia nemo beatae sit dignissimos eos.
          </p>

          <button className="products__content--btnExplore btn">Explore</button>
        </div>
        <div className="products__graphics">
          <Link href="/product">
            <div className="products__graphics-wrap image1">
              <Image
                src={image1}
                className="products__graphics-wrap-image image1"
                alt="wires in hand"
                layout="fill"
              />
            </div>
          </Link>

          <Link href="/product">
            <div className="products__graphics-wrap image2">
              <Image
                src={image1}
                className="products__graphics-wrap-image image1"
                alt="wires in hand"
                layout="fill"
              />
            </div>
          </Link>
          <Link href="/product">
            <div className="products__graphics-wrap image3">
              <Image
                src={image1}
                className="products__graphics-wrap-image image1"
                alt="wires in hand"
                layout="fill"
              />
            </div>
          </Link>
          <Link href="/product">
            <div className="products__graphics-wrap image4">
              <Image
                src={image1}
                className="products__graphics-wrap-image image1"
                alt="wires in hand"
                layout="fill"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
