import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import certificate1 from "../../assets/icons/certificate-icon.svg";

const Certificates = () => {
  // ! Object for carosuel responsiveness
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="certificate__wrap">
      <div className="certificate row">
        <h2 className="certificate--heading">Certificates</h2>
        <div>
          <Carousel responsive={responsive}>
            {/* card starts */}

            <div className="certificate__card">
              <div className="certificate__card--imgContainer">
                <Image
                  src={certificate1}
                  alt="certificate person"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="certificate__card__content">
                <h3 className="certificate__card__content--name">
                  certificate
                </h3>
                <p className="certificate__card__content--issueDate">
                  issueDate in company
                </p>
                <p className="certificate__card__content--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus tellus quam, gravida vitae
                </p>
              </div>
            </div>

            {/* card starts */}

            <div className="certificate__card">
              <div className="certificate__card--imgContainer">
                <Image
                  src={certificate1}
                  alt="certificate person"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="certificate__card__content">
                <h3 className="certificate__card__content--name">
                  certificate
                </h3>
                <p className="certificate__card__content--issueDate">
                  issueDate in company
                </p>
                <p className="certificate__card__content--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus tellus quam, gravida vitae
                </p>
              </div>
            </div>

            {/* card starts */}

            <div className="certificate__card">
              <div className="certificate__card--imgContainer">
                <Image
                  src={certificate1}
                  alt="certificate person"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="certificate__card__content">
                <h3 className="certificate__card__content--name">
                  certificate
                </h3>
                <p className="certificate__card__content--issueDate">
                  issueDate in company
                </p>
                <p className="certificate__card__content--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus tellus quam, gravida vitae
                </p>
              </div>
            </div>

            {/* card starts */}

            <div className="certificate__card">
              <div className="certificate__card--imgContainer">
                <Image
                  src={certificate1}
                  alt="certificate person"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="certificate__card__content">
                <h3 className="certificate__card__content--name">
                  certificate
                </h3>
                <p className="certificate__card__content--issueDate">
                  issueDate in company
                </p>
                <p className="certificate__card__content--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus tellus quam, gravida vitae
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
