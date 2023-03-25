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
            As a company committed to the &quot;Make in India&quot; concept, we
            take pride in our ability to manufacture products that are not only
            of high quality but also meet the strictest safety standards.
            <br></br>We understand the importance of certifications in
            demonstrating our expertise, compliance, and reliability, and are
            proud to have achieved all the necessary government certifications
            for our products. These certifications are a testament to our
            dedication to producing safe and reliable products that meet the
            needs of our customers, while also contributing to the growth of
            Indian manufacturing. <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default MadeIndia;
