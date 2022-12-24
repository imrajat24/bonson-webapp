import React, { useState } from "react";
import Image from "next/image";

import mainImg from "../../assets/images/66kv product img.png";
const Gallery = () => {
  // state for switching categories
  const [activePics, setActivePics] = useState("tag1");
  // variables for switching categories
  const tag1 = () => setActivePics("tag1");
  const tag2 = () => setActivePics("tag2");
  const tag3 = () => setActivePics("tag3");
  const tag4 = () => setActivePics("tag4");
  const tag5 = () => setActivePics("tag5");

  const galleryPics = [
    {
      id: "1",
      img: mainImg,
      tag: "tag1",
    },

    {
      id: "2",
      img: mainImg,
      tag: "tag4",
    },

    {
      id: "3",
      img: mainImg,
      tag: "tag3",
    },

    {
      id: "4",
      img: mainImg,
      tag: "tag1",
    },

    {
      id: "5",
      img: mainImg,
      tag: "tag5",
    },

    {
      id: "6",
      img: mainImg,
      tag: "tag5",
    },
    {
      id: "7",
      img: mainImg,
      tag: "tag2",
    },
    {
      id: "8",
      img: mainImg,
      tag: "tag2",
    },
    {
      id: "9",
      img: mainImg,
      tag: "tag2",
    },
  ];
  return (
    <section className="gallery__wrap">
      <div className="gallery row">
        <div className="tags_wrap">
          <h3 className="tagd" onClick={tag1}>
            All
          </h3>
          <h3 className="tags" onClick={tag2}>
            tag2
          </h3>
          <h3 className="tags" onClick={tag3}>
            tag3
          </h3>
          <h3 className="tags" onClick={tag4}>
            tag4
          </h3>
          <h3 className="tags" onClick={tag5}>
            tag5
          </h3>
        </div>

        <div className="gallery__graphics">
          {galleryPics
            .filter((pic) => pic.tag == activePics)
            .map((pic) => {
              return (
                <div className="gallery--imgWrap" key={pic.id}>
                  <Image
                    src={pic.img}
                    alt="otherProduct person"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
