import React, { useState } from 'react';
import './styles.scss';
import audible1 from '../images/audible-1.png';
import audible2 from '../images/audible-2.jpeg';
import audible3 from '../images/audible-3.jpeg';

const images = [audible1, audible2, audible3];

const Audible = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  console.log(currentImage);

  const otherImages = () => {
    return images.map((e, i) => (
      <span class="otherImageSpan" key={i} onClick={() => setCurrentImage(e)}>
        <img className="otherImage" src={e} />
      </span>
    ));
  };

  const imageToShow = (img) => {
    setCurrentImage(img);
  };

  return (
    <div>
      <div className="product">
        <h3 className="title"> Audible</h3>
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
          <img className="image" src={currentImage} alt="audible free trial" />
        </div>
        <div className="otherImagesContainer">{otherImages()}</div>

        <div className="btnContainer">
          <a href="#" class="btn">
            See Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default Audible;
