import React from "react";
import Image from "next/image";
import Certificates from "../about/Certificates";
import Products from "./Products.json";
// images
import mainImg from "../../assets/images/66kv product img.png";
import OtherProducts from "./OtherProducts";
const ProductPage = () => {
  return (
    <div className="product_wrap">
      <div className="product">
        <section>
          {Products.map((product) => {
            return (
              <>
                {/* // Product hero section */}
                <section className="product__hero row" key={product.id}>
                  <div className="product__hero__content">
                    <h1 className="product__hero__content--heading">
                      {product.productName}
                    </h1>
                    <br />
                    <p className="product__hero__content--para">
                      {product.productDesc}
                    </p>

                    <button className="product__hero__content--btn-enquiry btn-enquiry">
                      Quick Enquiry
                    </button>
                  </div>
                  <div className="product__hero__graphics">
                    <Image src={mainImg} alt="wire img" />
                  </div>
                </section>
                {/* product technical section */}
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
                      <b>Minimum Bending Radius :</b> Cable diameter ≤ 8 mm : 4
                      x outer diameter Approx. diameter &gt; 8 to 12 mm : 5 x
                      outer diameter Approx. diameter &gt; 12 mm : 6 x outer
                      diameter <br />
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

                {/* product application section */}
                <section className="product__application ">
                  <div className="row">
                    <h2 className="product__application--heading">
                      Applications
                    </h2>
                    <div className="product__application__cardWrap">
                      {/* Card Starts */}
                      <div className="product__application__card">
                        <div className="product__application__card--img">
                          <Image
                            src={mainImg}
                            alt="Product Img"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <h4 className="product__application__card--heading">
                          Application #1
                        </h4>
                        <p className="product__application__card--para">
                          {product.applicaton1}
                        </p>
                      </div>

                      {/* Card Starts */}
                      <div className="product__application__card">
                        <div className="product__application__card--img">
                          <Image
                            src={mainImg}
                            alt="Product Img"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <h4 className="product__application__card--heading">
                          Application #2
                        </h4>
                        <p className="product__application__card--para">
                          {product.applicaton2}
                        </p>
                      </div>

                      {/* Card Starts */}
                      <div className="product__application__card">
                        <div className="product__application__card--img">
                          <Image
                            src={mainImg}
                            alt="Product Img"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <h4 className="product__application__card--heading">
                          Application #3
                        </h4>
                        <p className="product__application__card--para">
                          {product.applicaton3}
                        </p>
                      </div>

                      {/* Card Starts */}
                      <div className="product__application__card">
                        <div className="product__application__card--img">
                          <Image
                            src={mainImg}
                            alt="Product Img"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <h4 className="product__application__card--heading">
                          Application #4
                        </h4>
                        <p className="product__application__card--para">
                          {product.applicaton4}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* product advantages section */}
                <section className="product__advantages">
                  <div className="row">
                    <h2 className="product__advantages--heading">Advantages</h2>
                    <div className="product__advantages--pointsWrap">
                      <ul className="product__advantages--points">
                        <li>{product.advantage1}</li>

                        <li>{product.advantage2}</li>
                        <li>{product.advantage3}</li>
                      </ul>
                      <ul className="product__advantages--points">
                        <li>{product.advantage4}</li>
                        <li>{product.advantage5}</li>
                        <li>{product.advantage6}</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* import certificate component  */}
                <Certificates />

                {/* imported other products component  */}
                <section className="product__otherProducts">
                  <OtherProducts />
                </section>
              </>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
