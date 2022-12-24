import React from "react";
import Image from "next/image";

// images
import mainImg from "../../assets/images/about-us-main-img.png";
const Info = () => {
  return (
    <section className="info row">
      <p className="info--para">
        Bonson is a renowned electrical product company that was established in
        2013 and was incorporated as a private limited company namely “Bonson
        Electrical Industries India Private Limited” on 06th July 2021. Our
        company specialises in manufacturing and selling wires and cables as
        well as fast-moving electrical goods (FMEG). Our organisation has a
        strong presence in the market of Haryana, Punjab, and Uttar Pradesh and
        is well-known for producing superior-quality goods. The company sells
        various electrical items, including Industrial & Domestic Circuit
        Protection Devices, Cables & Wires, and Electrical Accessories. Since
        our establishment, we have been catering to the needs of our customers
        with quality products and services. We have a team of qualified,
        experienced experts who are always ready to confront market challenges.
        <br />
        Our brand is known for its trustworthy quality and our success is built
        on a strong emphasis on product, process, quality, and performance. We
        are always investing in research and development to bring new items to
        markets, such as building wires, flexible cables, single and multi-core
        cables, communication cables, welding cables, submersible flat and round
        cables, rubber cables, specialty cables, and green wires. Our lean and
        effective manufacturing process allows us to keep prices low. We have a
        robust quality culture that assures our products are of the greatest
        quality and we continually work to improve our service levels and go
        above and beyond our customers expectations.
        <br />
        All our products are certified by well-known labs. Our production
        facilities in Bhiwadi are certified to national standards, allowing them
        to maintain optimum workflow efficiency while adhering to health and
        safety regulations. The facilities are audited on a regular basis to
        ensure that they continue to fulfill these criteria.
      </p>
      <div className="info__imgContainer">
        <Image
          src={mainImg}
          alt="warehouse image"
          className="info--img"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Info;
