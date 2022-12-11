import React from "react";
import Image from "next/image";

// images
import certificate1 from "../../assets/icons/certificate-icon.svg";
import Link from "next/link";

const Certificates = () => {
  return (
    <div className="certificate__wrap">
      <div className="certificate row">
        <h2 className="certificate--heading">Certificates</h2>
        <div className="certificate__cardsWrap">
          {/* card starts */}
          <Link href="https://drive.google.com/file/d/1u7qsSPsqWDug2q6Ap4UuFcEufypGiMrw/view?usp=sharing">
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
          </Link>

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
              <h3 className="certificate__card__content--name">certificate</h3>
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
              <h3 className="certificate__card__content--name">certificate</h3>
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
              <h3 className="certificate__card__content--name">certificate</h3>
              <p className="certificate__card__content--issueDate">
                issueDate in company
              </p>
              <p className="certificate__card__content--para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tellus quam, gravida vitae
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
