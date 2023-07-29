import React, { useState } from "react";

const Slider = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carrousel">
      <img className="current-img" src={pictures[currentSlide]} alt="" />
      {pictures.length > 1 && (
        <>
          <img
            className="arrow left-arrow"
            src="./img/left-arrow.png"
            alt="flèche vers la gauche"
            onClick={previousSlide}
          />
          <img
            className="arrow right-arrow"
            src="./img/right-arrow.png"
            alt="flèche vers la droite"
            onClick={nextSlide}
          />
          <span className="carrousel_slide-number">
            {currentSlide + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
};

export default Slider;
