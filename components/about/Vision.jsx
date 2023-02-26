import React from "react";
import Image from "next/image";

// images
import eye from "../../assets/icons/vision-eye-icon.svg";
const Vision = () => {
  return (
    <section className="vision__wrap">
      <div className="vision row">
        <div className="vision__card">
          <div className="vision__card__content">
            <h3 className="vision__card__content--heading">Our Vision</h3>
            <p className="vision__card__content--para">
              We strive to be India’s top cable provider, providing a
              comprehensive range of goods and services to fulfil the
              diversified requirements of our customers. Our continuous
              improvement strategy is aimed at increasing customer satisfaction
              and loyalty by offering dependable, affordable, and sustainable
              energy solutions.
            </p>
          </div>
          <div className="vision__card_graphic">
            <Image src={eye} alt="eye icon" />
          </div>
        </div>

        <div className="vision__card">
          <div className="vision__card__content">
            <h3 className="vision__card__content--heading">Our Mission</h3>
            <p className="vision__card__content--para">
              Providing our valued customers with a one-stop solution for wires
              and cables products. We will expand on our strong foundation of
              technological excellence, outstanding quality, and brand
              leadership, and our expansion will secure the well-being of our
              employees and the safety of our customers and environmental needs.
            </p>
          </div>
          <div className="vision__card_graphic">
            <Image src={eye} alt="eye icon" />
          </div>
        </div>

        <div className="vision__card">
          <div className="vision__card__content">
            <h3 className="vision__card__content--heading">Core Values</h3>
            <p className="vision__card__content--para">
              Committed to operating with complete integrity and in accordance
              with the highest ethical standards. Collaborating relationships
              are used to realise synergies. Maintain long-term business
              relationships. To achieve the best results, we foster innovation,
              idea sponsorship, and creativity.
            </p>
          </div>
          <div className="vision__card_graphic">
            <Image src={eye} alt="eye icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
