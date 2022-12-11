import React from "react";
import Image from "next/image";

// images
import team1 from "../../assets/images/team-img-1.jpg";
import Link from "next/link";

const OurHistory = () => {
  return (
    <div className="history__wrap">
      <div className="history row">
        <h2 className="history--heading">Our History</h2>

        <div className="history__cardWrap">
          <div className="history__card">
            <div className="history__graphics">
              <div className="history__graphics--image img1">
                <Image src={team1} alt="team" objectFit="cover" layout="fill" />
              </div>
              <div className="history__graphics--image img2">
                <Image src={team1} alt="team" objectFit="cover" layout="fill" />
              </div>

              <div className="history__graphics--image img3">
                <Image src={team1} alt="team" objectFit="cover" layout="fill" />
              </div>
            </div>
            <div className="history__content">
              <h3 className="history__content--year">1998</h3>
              <p className="history__content--para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                sed corporis nam ad dolore dicta id nisi fuga, adipisci quod!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
