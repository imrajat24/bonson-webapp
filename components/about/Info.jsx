/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

// images
import mainImg from "../../assets/images/about-us-main-img.webp";
const Info = () => {
  return (
    <section className="info row">
      <p className="info--para">
        Bonson is an electrical product brand that was established in 2013. Our
        company was incorporated as a private limited company namely “Bonson
        Electrical Industries India Private Limited” on 06th July, 2021. Our
        company is a leading manufacturer and seller of electrical wires and
        cables, and Fast-Moving Electrical Goods. Our organization has a
        significant presence in the market of Haryana, Punjab and Uttar Pradesh
        and is well-known for our commitment to quality and standards and our
        reputation for manufacturing superior-quality products is second to
        none. We offer a wide range of electrical products including House Wire
        and Industrial Cables, Single and Multicore Flexible Cables, 3 core flat
        cables, Aluminium cables, Submersible Poly Winding Wire, Bare and Fine
        Copper Wire. We've been in the business of meeting customer needs with
        quality product offerings and services since we first opened our doors
        and continue to do so today. We have a team of qualified, skilled and
        experienced professionals who are always ready to face the challenges of
        the market.
        <br />
        {/* <br /> */}
        Our brand is known for its trustworthy quality and our success is built
        on a strong emphasis on product, process, quality, and performance. We
        are always investing in Research and Development to bring breakthrough
        items to market and have a lean and effective manufacturing process that
        assists us in keeping prices low. We have a robust quality culture that
        ensures that our products are of the best quality. We continuously work
        to improve our service levels and go above and beyond of our customers'
        expectations.
        <br />
        {/* <br /> */}
        In addition, our production facilities in Khushkhera, Rajasthan possess
        nationally certified labs, allowing us to test and update our production
        methods and materials to ensure that we deliver our commitment to
        quality while adhering to BIS Standards. The facilities are audited on a
        regular basis to ensure that they continue to fulfil these criteria.
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
