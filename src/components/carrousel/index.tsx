// Carrousel.tsx
import React from "react";
import "./style.scss";

type CarrouselProps = {
  slides: string;
};

const Carrousel: React.FC<CarrouselProps> = ({ slides }) => {
  return (
    <div className="carousel">
      <div
        className="carousel-img"
        style={{ backgroundImage: `url(${slides})` }}
      ></div>
    </div>
  );
};

export default Carrousel;
