import React, { useState } from "react";
import "./styles.scss";
import audible1 from "../images/audible-1.png";
import audible2 from "../images/audible-2.jpeg";
import audible3 from "../images/audible-3.jpeg";
import homepageIcon from "../shared/homepageIcon";

const title = "Audible";
const imageAlt = "audible free trial";
const link = "https://amzn.to/2D7s9CZ";
const images = [audible1, audible2, audible3];

const Audible = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const otherImages = () => {
    return images.map((e, i) => (
      <span class="otherImageSpan" key={i} onClick={() => setCurrentImage(e)}>
        <img className="otherImage" alt={imageAlt} src={e} />
      </span>
    ));
  };

  return (
    <div>
      <div className="product">
        {homepageIcon()}
        <h3 className="title">{title}</h3>
        <p className="description">
          There’s only one word for this: love! Audible is an extremely good
          product that allows me to listen to my favourite books. I am a slow
          reader and get bored quickly when I read a book. And when reading a
          book I have to dedicate all my attention into reading that book – i.e.
          I’m not able to multitask. But when it comes to listening a book, I’m
          able to adjust the listening speed, I can listen to the book when I’m
          working out, or when I’m driving etc etc! I love it and I would
          recommend it to every single person! The great thing is that you can
          get a free 30 day trial.
        </p>
        <div className="imageContainer">
          <img className="image" src={currentImage} alt={imageAlt} />
        </div>
        <div className="otherImagesContainer">{otherImages()}</div>
        <div className="btnContainer">
          <a href={link} class="btn">
            See Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default Audible;
