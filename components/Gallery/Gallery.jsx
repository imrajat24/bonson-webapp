import React from "react";
import Image from "next/image";

import mainImg from "../../assets/images/66kv product img.png";
const Gallery = () => {
  return (
    <div className="gallery__wrap">
      <div className="gallery row">
        <div className="tags_wrap">
          <h3 className="tagd">tag1</h3>
          <h3 className="tags">tag2</h3>
          <h3 className="tags">tag3</h3>
          <h3 className="tags">tag4</h3>
          <h3 className="tags">tag5</h3>
        </div>

        <div className="gallery__graphics">
          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
            <Image
              src={mainImg}
              alt="otherProduct person"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="gallery--imgWrap">
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
