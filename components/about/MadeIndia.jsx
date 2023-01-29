import React from "react";
import Image from "next/image";

// images
import madeBg from "../../assets/images/make-in-india-bg.png";
import madeBadge from "../../assets/images/make-in-india-badge.png";
const MadeIndia = () => {
  return (
    <section className="madeIndia__wrap">
      <div className="madeIndia row">
        <div className="badge">
          <Image src={madeBadge} alt="made in india badge" />
        </div>
        <div className="section__heading">
          <h2 className="madeIndia__content--heading">
            Honestly Make in India
          </h2>
          <p className="madeIndia__content--para">
            We are proud to have attained all important certifications on our
            products that are indicative of out commitment of producing safe
            products of high quality. <br />
            <br />
            These certifications are extremely valuable for us as they are a
            proof of our dedication, expertise, compliance and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MadeIndia;
