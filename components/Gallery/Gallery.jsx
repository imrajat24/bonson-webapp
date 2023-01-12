import React, { useState } from "react";
import Image from "next/image";

import galleryPics from "./galleryPics";

const Gallery = () => {
  // state for switching categories
  const [activePics, setActivePics] = useState("all");

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
          <h3 className="tags" onClick={() => setActivePics("copper")}>
            Copper
          </h3>
          <h3 className="tags" onClick={() => setActivePics("other")}>
            Other
          </h3>
        </div>

        <div className="gallery__graphics">
          {filteredItems.map((pic) => (
            <div className="gallery--imgWrap" key={pic.img}>
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
