import React from "react";
import Image from "next/image";

// images
import team1 from "../../assets/images/team-img-1.jpg";

const Team = () => {
  return (
    <div className="team__wrap">
      <div className="team row">
        <div className="section__heading">
          <h2>Our team</h2>
        </div>
        <div className="team__cardsWrap">
          {/* card starts */}
          <div className="team__card">
            <div className="team__card--imgContainer">
              <Image
                src={team1}
                alt="team person"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="team__card__content">
              <h3 className="team__card__content--name">Mr. Ayush Aggarwal</h3>
              <p className="team__card__content--position">
                Position in company
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="team__card">
            <div className="team__card--imgContainer">
              <Image
                src={team1}
                alt="team person"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="team__card__content">
              <h3 className="team__card__content--name">Mr. Ayush Aggarwal</h3>
              <p className="team__card__content--position">
                Position in company
              </p>
            </div>
          </div>

          {/* card starts */}
          <div className="team__card">
            <div className="team__card--imgContainer">
              <Image
                src={team1}
                alt="team person"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="team__card__content">
              <h3 className="team__card__content--name">Mr. Ayush Aggarwal</h3>
              <p className="team__card__content--position">
                Position in company
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
