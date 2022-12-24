import React, { useState } from "react";
import Image from "next/image";

import mainImg from "../../assets/images/66kv product img.png";

const Gallery = () => {
  // state for switching categories
  const [activePics, setActivePics] = useState("tag1");
  // Gallery pics object
  const galleryPics = [
    {
      id: "1",
      img: mainImg,
      tag: ["tag1", "tag3"],
    },

    {
      id: "2",
      img: mainImg,
      tag: ["tag1", "tag2", "tag3"],
    },

    {
      id: "3",
      img: mainImg,
      tag: ["tag1", "tag2", "tag5"],
    },

    {
      id: "4",
      img: mainImg,
      tag: ["tag1", "tag2", "tag3"],
    },

    {
      id: "5",
      img: mainImg,
      tag: ["tag1", "tag2"],
    },

    {
      id: "6",
      img: mainImg,
      tag: ["tag1", "tag5"],
    },
    {
      id: "7",
      img: mainImg,
      tag: ["tag1", "tag4"],
    },
    {
      id: "8",
      img: mainImg,
      tag: ["tag1", "tag2", "tag4"],
    },
    {
      id: "9",
      img: mainImg,
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
          <h3 className="all" onClick={() => setActivePics("tag1")}>
            All
          </h3>
          <h3 className="tags" onClick={() => setActivePics("tag2")}>
            tag2
          </h3>
          <h3 className="tags" onClick={() => setActivePics("tag3")}>
            tag3
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
