import React, { useState } from "react";
import Image from "next/image";

import mainImg from "../../assets/images/66kv product img.png";
import plant1 from "../../assets/images/plant/plant__ (1).jpg";
import plant2 from "../../assets/images/plant/plant__ (2).jpg";
import plant3 from "../../assets/images/plant/plant__ (3).jpg";
import plant4 from "../../assets/images/plant/plant__ (4).jpg";
import plant5 from "../../assets/images/plant/plant__ (5).jpg";
import plant6 from "../../assets/images/plant/plant__ (6).jpg";
import plant7 from "../../assets/images/plant/plant__ (7).jpg";
import plant8 from "../../assets/images/plant/plant__ (8).jpg";
import plant9 from "../../assets/images/plant/plant__ (9).jpg";
import plant10 from "../../assets/images/plant/plant__ (10).jpg";
import plant11 from "../../assets/images/plant/plant__ (11).jpg";
import plant12 from "../../assets/images/plant/plant__ (12).jpg";
import plant13 from "../../assets/images/plant/plant__ (13).jpg";
import ww1 from "../../assets/images/winding-wire/winding-wire__ (1).jpg";
import ww2 from "../../assets/images/winding-wire/winding-wire__ (2).jpg";
import ww3 from "../../assets/images/winding-wire/winding-wire__ (3).jpg";
import ww4 from "../../assets/images/winding-wire/winding-wire__ (4).jpg";
import ww5 from "../../assets/images/winding-wire/winding-wire__ (5).jpg";
import ww6 from "../../assets/images/winding-wire/winding-wire__ (6).jpg";
import ww7 from "../../assets/images/winding-wire/winding-wire__ (7).jpg";
import ww8 from "../../assets/images/winding-wire/winding-wire__ (8).jpg";
import ww9 from "../../assets/images/winding-wire/winding-wire__ (9).jpg";
import ww10 from "../../assets/images/winding-wire/winding-wire__ (10).jpg";
import ww11 from "../../assets/images/winding-wire/winding-wire__ (11).jpg";

const Gallery = () => {
  // state for switching categories
  const [activePics, setActivePics] = useState("all");
  // Gallery pics object
  const galleryPics = [
    {
      id: "1",
      img: plant1,
      tag: ["all", "Plant"],
    },

    {
      id: "2",
      img: plant2,
      tag: ["all", "Plant"],
    },

    {
      id: "3",
      img: plant3,
      tag: ["all", "Plant"],
    },

    {
      id: "4",
      img: plant4,
      tag: ["all", "Plant"],
    },

    {
      id: "5",
      img: plant5,
      tag: ["all", "Plant"],
    },

    {
      id: "6",
      img: plant6,
      tag: ["all", "Plant"],
    },
    {
      id: "7",
      img: plant7,
      tag: ["all", "Plant"],
    },
    {
      id: "8",
      img: plant8,
      tag: ["all", "Plant"],
    },
    {
      id: "9",
      img: plant9,
      tag: ["all", "Plant"],
    },
    {
      id: "10",
      img: plant10,
      tag: ["all", "Plant"],
    },
    {
      id: "11",
      img: plant11,
      tag: ["all", "Plant"],
    },
    {
      id: "12",
      img: plant12,
      tag: ["all", "Plant"],
    },
    {
      id: "13",
      img: plant13,
      tag: ["all", "Plant"],
    },

    {
      id: "14",
      img: ww1,
      tag: ["all", "winding-wire"],
    },
    {
      id: "15",
      img: ww2,
      tag: ["all", "winding-wire"],
    },
    {
      id: "16",
      img: ww3,
      tag: ["all", "winding-wire"],
    },
    {
      id: "17",
      img: ww4,
      tag: ["all", "winding-wire"],
    },
    {
      id: "18",
      img: ww5,
      tag: ["all", "winding-wire"],
    },
    {
      id: "19",
      img: ww6,
      tag: ["all", "winding-wire"],
    },
    {
      id: "20",
      img: ww7,
      tag: ["all", "winding-wire"],
    },
    {
      id: "21",
      img: ww8,
      tag: ["all", "winding-wire"],
    },
    {
      id: "22",
      img: ww9,
      tag: ["all", "winding-wire"],
    },
    {
      id: "23",
      img: ww10,
      tag: ["all", "winding-wire"],
    },
    {
      id: "24",
      img: ww11,
      tag: ["tag1", "tag3", "tag5"],
    },
    {
      id: "9",
      img: plant9,
      tag: ["tag1", "tag3", "tag5"],
    },
  ];

  // filter array accoding to tags keyword
  const filteredItems = galleryPics.filter((pic) =>
    pic.tag.includes(activePics)
  );

  return (
    <section className="gallery__wrap">
      <div className="gallery row">
        <div className="tags_wrap">
          <h3 className="all" onClick={() => setActivePics("all")}>
            All
          </h3>
          <h3 className="tags" onClick={() => setActivePics("Plant")}>
            Plant
          </h3>
          <h3 className="tags" onClick={() => setActivePics("winding-wire")}>
            Winding Wire
          </h3>
          <h3 className="tags" onClick={() => setActivePics("tag4")}>
            tag4
          </h3>
          <h3 className="tags" onClick={() => setActivePics("tag5")}>
            tag5
          </h3>
        </div>

        <div className="gallery__graphics">
          {filteredItems.map((pic) => (
            <div className="gallery--imgWrap" key={pic.id}>
              <Image
                src={pic.img}
                alt="otherProduct person"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
