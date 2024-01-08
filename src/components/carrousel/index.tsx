// Carrousel.tsx
import React from "react";
import "./style.scss";

type CarrouselProps = {
  slides: string;
};

/**
 * Carrousel Component.
 * @param {Object} CarrouselProps - Props for the Carrousel component.
 * @param {string} CarrouselProps.slides - The URL of the image for the Carrousel.
 * @returns {JSX.Element} - The JSX element representing the Carrousel component.
 */

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
