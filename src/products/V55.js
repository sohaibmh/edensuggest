import React, { useState } from "react";
import "./styles.scss";
import v551 from "../images/v55-1.jpg";
import v552 from "../images/v55-2.jpg";
import v553 from "../images/v55-3.jpg";
import homepageIcon from "../shared/homepageIcon";

const images = [v551, v552, v553];

const V55 = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const otherImages = () => {
    return images.map((e, i) => (
      <span class="otherImageSpan" key={i} onClick={() => setCurrentImage(e)}>
        <img className="otherImage" src={e} />
      </span>
    ));
  };

  return (
    <div>
      <div className="product">
        {homepageIcon()}
        <h3 className="title">V55 MAX Double Strength Salicylic Acid Cream</h3>
        <p className="description">
          This is absolutely great for any person that gets spots on their face.
          I would get spots very frequently no matter how old I grew! I came
          across this product and it absolutely changed everything! The results
          are brilliant – now months go by and I wouldn’t get a single spot on
          my face. One thing you should keep in mind is that you will not get
          the desired results immediately after applying. You have to
          consistently apply it for two or three weeks. And then you will know
          what I’m talking about!
        </p>
        <div className="imageContainer">
          <img
            className="image"
            src={currentImage}
            alt="V55 MAX Double Strength Salicylic Acid Cream"
          />
        </div>
        <div className="otherImagesContainer">{otherImages()}</div>
        <div className="btnContainer">
          <a
            href="https://www.amazon.co.uk/gp/product/B00WR4MRHG/ref=as_li_tl?ie=UTF8&tag=sh198-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=B00WR4MRHG&linkId=9e892e875d2509bc1bcd2f92f1027f41"
            class="btn"
          >
            See Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default V55;
