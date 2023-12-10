import React from "react";
import "./style.scss";

type CarrouselProps = {
  slides: string[];
};

const Carrousel: React.FC<CarrouselProps> = ({ slides }) => {
  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          className="carousel-img"
          key={index}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}
    </div>
  );
};

export default Carrousel;
