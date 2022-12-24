import React from "react";
import Image from "next/image";

// images
import team1 from "../../assets/images/team-img-1.jpg";

const Team = () => {
  return (
    <section className="team__wrap">
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
              <h3 className="team__card__content--name">
                Mr. Chander Aggarwal
              </h3>
              <p className="team__card__content--position">
                Position in company
              </p>
              <p className="team__card__content--desc">
                Mr. Chander Aggarwal has over 25 years of industry experience in
                various sectors, including wires and cables, winding wire,
                ceiling fans, and PVC. In his current role as ————————- of
                Bonson Pvt. Ltd. He brings a wealth of expertise and experience
                to the organisation. He is also experienced in marketing, sales,
                and purchasing, which makes him a valuable asset to the company.
                Under his guidance, Bonson Pvt. Ltd has become one of the most
                successful and renowned firms in North India.
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
              <h3 className="team__card__content--name">Mr. Sumit Singhal </h3>
              <p className="team__card__content--position">
                Position in company
              </p>
              <p className="team__card__content--desc">
                Mr. Sumit Singhal has 12 years of experience in the sector,
                starting with wires and cables in 2010 and progressing to copper
                wire drawing. He is currently an industry leader in drawing
                copper wire, with a solid reputation for quality and customer
                service. His loyal customer base has helped the business
                flourish. Mr. Singhal is constantly on the lookout for
                innovative strategies to build and expand the business. He well
                understands the market and is responsible for sales/purchases,
                product creation, and negotiating the best deals.
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
              <p className="team__card__content--desc">
                Ayush Aggarwal is an experienced engineer with a B.Tech. in
                computer science from a well-renowned university. He has two
                years of professional work experience under his belt and is
                proficient in technological development tools. Ayush has
                successfully completed countless projects for clients from
                various industries. He currently manages plant development and
                product production. His excellent analytical and problem-solving
                abilities have allowed him to consistently produce high-quality
                results. Ayush is also a great team player who is always willing
                to go the extra mile to support his team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
