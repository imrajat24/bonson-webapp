import React from "react";
import Image from "next/image";
// import Certificates from "../about/Certificates";
import categories from "./categories.json";

// data file
// images
import mainImg from "../../assets/images/66kv product img.png";
import OtherProducts from "./OtherProducts";
import ProductSlider from "./ProductSlider";

// function starts--->
const ProductPage = ({ id }) => {
  return (
    <div className="product">
      {categories
        .filter((prod) => prod.id == id.product)
        .map((product) => {
          return (
            <>
              <div className="product__hero row" key={product.id}>
                <div className="product__hero__content">
                  <h1 className="product__hero__content--heading">
                    {product.categoryHeading}
                  </h1>
                  <br />
                  <p className="product__hero__content--para">
                    {product.categoryDesc}
                  </p>

                  <button className="btn product__hero__content--btn-enquiry btn-enquiry">
                    Quick Enquiry
                  </button>
                </div>
                <div className="product__hero__graphics">
                  <ProductSlider images={product.images} />
                </div>
              </div>

              {/* --------------------------------------------------------------------------------------- */}

              {/* Product Application section */}
              <section className="product__application ">
                <div className="row">
                  <h2 className="product__application--heading">
                    Applications
                  </h2>
                  <div className="product__application__cardWrap">
                    {product.applications.map((application, i) => {
                      return (
                        <div className="product__application__card" key={i}>
                          <div className="product__application__card--img">
                            <Image
                              src={product.images[i]}
                              alt="Product Img"
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <h4 className="product__application__card--heading">
                            <span>#{i + 1}</span>Application
                          </h4>
                          <p className="product__application__card--para">
                            {application}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* --------------------------------------------------------------------------------------- */}

              {/* Product Technical section */}
              <section className="product__technical">
                <div className="row">
                  <h2 className="product__technical--heading">
                    Technical Info
                  </h2>
                  <br />
                  <h3 className="product__technical--subHeading">Standard</h3>
                  <p className="product__technical--info">
                    DIN EN 50525-2-31, VDE 0285-525-2-31, BS EN 50525-2-31.
                  </p>
                  <br />
                  <h3 className="product__technical--subHeading">
                    Technical Data
                  </h3>

                  <p className="product__technical--info">
                    <b>Voltage Rating :</b> H05V-K 0.5 to 1 mm² - 300 / 500V,
                    H07V-K 1.5 to 240 mm² - 450 / 750V <br />
                    <b>Temperature Range :</b> -30°C to +70°C <br />
                    <b>Minimum Bending Radius :</b> Cable diameter ≤ 8 mm : 4 x
                    outer diameter Approx. diameter &gt; 8 to 12 mm : 5 x outer
                    diameter Approx. diameter &gt; 12 mm : 6 x outer diameter{" "}
                    <br />
                    <b>Test Voltage :</b> 2500V
                  </p>
                  <br />
                  <h3 className="product__technical--subHeading">
                    Construction
                  </h3>
                  <p className="product__technical--info">
                    DIN EN 50525-2-31, VDE 0285-525-2-31, BS EN 50525-2-31.
                  </p>
                </div>
              </section>

              {/* --------------------------------------------------------------------------------------- */}

              {/* Product Advantages section */}
              <section className="product__advantages">
                <div className="row">
                  <h2 className="product__advantages--heading">Advantages</h2>
                  <div className="product__advantages--pointsWrap">
                    <ul className="product__advantages--points">
                      {product.advantages.map((point, i) => {
                        return i < 2 && <li key={i}>{point}</li>;
                      })}
                    </ul>
                    <ul className="product__advantages--points">
                      {product.advantages.map((point, i) => {
                        return i >= 2 && <li key={i}>{point}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </section>

              {/* --------------------------------------------------------------------------------------- */}

              {/* import certificate component  */}
              {/* <Certificates /> */}

              {/* --------------------------------------------------------------------------------------- */}

              {/* imported other products component  */}
              <section className="product__otherProducts">
                <OtherProducts id={id.product} />
              </section>

              {/* --------------------------------------------------------------------------------------- */}
            </>
          );
        })}
    </div>
  );
};

export default ProductPage;
