import React, { useState } from "react";
import "./styles.scss";
import sanicloth1 from "../images/sanicloth-1.jpg";
import homepageIcon from "../shared/homepageIcon";

const images = [sanicloth1];

const Sanicloth = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const otherImages = () => {
    return images.map((e, i) => (
      <span class="otherImageSpan" key={i} onClick={() => setCurrentImage(e)}>
        <img
          className="otherImage"
          alt="Sani-Cloth 70% Alcohol Wipes"
          src={e}
        />
      </span>
    ));
  };

  return (
    <div>
      <div className="product">
        {homepageIcon()}
        <h3 className="title">Sani-Cloth 70% Alcohol Wipes</h3>
        <p className="description">
          So I used to work in a hospital lab where we had this product
          available for us to clean our desks, pipettes, vortex, and any other
          equipment, you name it. But when I would go home I would yearn for
          this as I was so used to it at work. So I searched it on Amazon, and
          to my delight, it was available and I immediately bought it. It’s
          really good and I would use it to disinfect anything!
        </p>
        <div className="imageContainer">
          <img className="image" src={currentImage} alt="audible free trial" />
        </div>
        <div className="otherImagesContainer">{otherImages()}</div>
        <div className="btnContainer">
          <a
            href="https://www.amazon.co.uk/Sani-Cloth-70-Alcohol-Wipes-Canister/dp/B01N7VXUAF/ref=as_li_ss_tl?dchild=1&keywords=Sanicloth&qid=1598621691&s=audible&sr=1-3&linkCode=ll1&tag=sh198-21&linkId=2ad2adcfc3573267adba66f830f883bc&language=en_GB"
            class="btn"
          >
            See Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sanicloth;
