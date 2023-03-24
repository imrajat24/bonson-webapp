import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import team1 from "../../assets/images/ABout/1997.png";
import team2 from "../../assets/images/ABout/2005.png";
import team3 from "../../assets/images/ABout/2009.png";
import team4 from "../../assets/images/ABout/2010.png";
import team5 from "../../assets/images/ABout/2011.png";
import Link from "next/link";

const OurHistory = () => {
  // ! Object for carosuel responsiveness
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="history__wrap">
      <div className="history row">
        <div className="section__heading">
          <h2 className="history--heading">Our History</h2>
        </div>

        <Carousel responsive={responsive} showDots={true} focusOnSelect={true}>
          {/* card starts */}
          <div className="history__card">
            <div className="history__graphics">
              <div className="history__graphics--image img1">
                <Image
                  src={team1}
                  alt="team"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="history__content">
              <h3 className="history__content--year">1998</h3>
              <p className="history__content--para">
                Launched the first electrical products plant with wires and
                cables. Started manufacturing House and Industrial Wires,
                Submersible 3 Core Flat Wires, Multicore Copper and Aluminium
                Wires.
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="history__card">
            <div className="history__graphics">
              <div className="history__graphics--image img1">
                <Image
                  src={team2}
                  alt="team"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="history__content">
              <h3 className="history__content--year">2005</h3>
              <p className="history__content--para">
                {" "}
                Added Poly-Winding Wire to its portfolio.
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="history__card">
            <div className="history__graphics">
              <div className="history__graphics--image img1">
                <Image
                  src={team3}
                  alt="team"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="history__content">
              <h3 className="history__content--year">2009</h3>
              <p className="history__content--para">
                Started manufacturing ceiling fans
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="history__card">
            <div className="history__graphics">
              <div className="history__graphics--image img1">
                <Image
                  src={team4}
                  alt="team"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="history__content">
              <h3 className="history__content--year">2010</h3>
              <p className="history__content--para">
                Established the first copper wire drawing plant enabling better
                control over quality of raw material.
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="history__card">
            <div className="history__graphics">
              <div className="history__graphics--image img1">
                <Image
                  src={team5}
                  alt="team"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="history__content">
              <h3 className="history__content--year">2011</h3>
              <p className="history__content--para">
                Started manufacturing PVC Compound in house to eliminate the raw
                material quality and availability issue in our wire and cable
                pipeline.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default OurHistory;
