import React from "react";
import Image from "next/image";

import mainImg from "../../assets/images/66kv product img.png";
const Gallery = () => {
  return (
    <div className="gallery__wrap">
      <div className="gallery row">
        <div className="tags_wrap">
          <h2 className="tag">tag1</h2>
          <h2 className="tag">tag2</h2>
          <h2 className="tag">tag3</h2>
          <h2 className="tag">tag4</h2>
          <h2 className="tag">tag5</h2>
        </div>

        <div className="gallery__graphics">
          <div className="otherProduct__card--imgContainer">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
