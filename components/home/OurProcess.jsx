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
              Raw materials
            </h3>
            <p className="ourprocess__contentWrap__card--para">
              Aluminum, copper, and PVC composite raw materials are utilised to
              power consumer appliances, wires, cables, and electrical
              equipment.
            </p>
          </div>

          <div className="ourprocess__contentWrap__card">
            <h3 className="ourprocess__contentWrap__card--heading">Testing </h3>
            <p className="ourprocess__contentWrap__card--para">
              Annealing conditions, resistance, tensile strength, wrapping wire,
              and copper purity are all tested in different phases such as
              physical and spark testing.
            </p>
          </div>

          <div className="ourprocess__contentWrap__card">
            <h3 className="ourprocess__contentWrap__card--heading">
              Packing & Dispatch
            </h3>
            <p className="ourprocess__contentWrap__card--para">
              This is the final stage of the process, and we have the best
              professionals to ensure your products reach their destination
              correctly packaged and sealed with all essential paperwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
