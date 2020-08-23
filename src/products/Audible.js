import React from 'react';
import './styles.scss';

const images = [];

const Audible = () => {
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
        <div className="image">Images</div>
        <div class="container">
          <a href="#" class="btn">
            See Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default Audible;
