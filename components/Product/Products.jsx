import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

// images
import image1 from "../../assets/images/categories-hero-img.png";

const Products = () => {
  return (
    <div className="products row">
      <div className="hero__heading">
        <h1 className="products__content--heading">Product Range Offered</h1>
        <p className="products__content--para">
          As a fast-growing manufacturer of industrial cables, we offer a wide
          variety of options according to the market needs, including control
          cables, multicore cables, low and high-voltage cables, and more. Our
          cables are safe, dependable, heat retardant, fire resistant, and made
          to the highest standards while adhering to national standards and
          meeting environmental requirements.
        </p>

        <Link
          to="category-nav"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="products__content--btnExplore btn">Explore</button>
        </Link>
      </div>
      <div className="products__graphics">
        <div className="products__graphics-wrap image1">
          <Image
            src={image1}
            className="products__graphics-wrap-image image1"
            alt="wires in hand"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
