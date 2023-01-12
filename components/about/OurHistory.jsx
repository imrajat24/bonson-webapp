import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import team1 from "../../assets/images/history-slider.png";
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
                launched its first electrical products, which were wires and
                cables.
              </p>
            </div>
          </div>

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
              <h3 className="history__content--year">2005</h3>
              <p className="history__content--para">
                {" "}
                began working on winding wire.
              </p>
            </div>
          </div>

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
              <h3 className="history__content--year">2009</h3>
              <p className="history__content--para">
                we began supplying and distributing ceiling fans.
              </p>
            </div>
          </div>

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
              <h3 className="history__content--year">2010</h3>
              <p className="history__content--para">
                we proceeded to the copper wire drawing.
              </p>
            </div>
          </div>

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
              <h3 className="history__content--year">2011</h3>
              <p className="history__content--para">
                PVC manufacturing and selling began in 2011.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default OurHistory;
