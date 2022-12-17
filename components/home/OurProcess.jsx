import React from "react";
import Image from "next/image";
import processImg from "../../assets/images/processImg.png";
const OurProcess = () => {
  return (
    <section className="ourprocess__wrap row">
      <div className="section__heading">
        <h2 className="whyUs--heading">Our Process</h2>
      </div>
      <div className="ourprocess">
        <div className="ourprocess__graphics">
          <Image src={processImg} className="processImg" alt="process img" />
        </div>
        <div className="ourprocess__contentWrap">
          <div className="ourprocess__contentWrap__card">
            <h3 className="ourprocess__contentWrap__card--heading">
              Process Number 1
            </h3>
            <p className="ourprocess__contentWrap__card--para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ea.
            </p>
          </div>

          <div className="ourprocess__contentWrap__card">
            <h3 className="ourprocess__contentWrap__card--heading">
              Process Number 2
            </h3>
            <p className="ourprocess__contentWrap__card--para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ea.
            </p>
          </div>

          <div className="ourprocess__contentWrap__card">
            <h3 className="ourprocess__contentWrap__card--heading">
              Process Number 3
            </h3>
            <p className="ourprocess__contentWrap__card--para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
