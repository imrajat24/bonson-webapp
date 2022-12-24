import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "react-scroll/modules";

// images
import image1 from "../../assets/images/categories-hero-img.png";

const Products = () => {
  return (
    <section className="products__wrap">
      <div className="products row">
        <div className="hero__heading">
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

          <Link
            to="category-nav"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button className="products__content--btnExplore btn">
              Explore
            </button>
          </Link>
        </div>
        <div className="products__graphics">
          <div className="products__graphics-wrap image1">
            <Image
              src={image1}
              className="products__graphics-wrap-image image1"
              alt="wires in hand"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
