import React from "react";
import "./style.scss";
type StarsProps = {
  color: string;
};

/**
 * Stars Component.
 *
 * @param {Object} StarsProps - Props for the Stars component.
 * @param {string} StarsProps.color - The color of the star.
 * @returns {JSX.Element} - The JSX element representing the Stars component.
 */


const Stars: React.FC<StarsProps> = ({ color }) => {
  return (
    <div>
      <div className="stars">
        <i style={{ color: color }} className="fa-sharp fa-solid fa-star"></i>
      </div>
    </div>
  );
};

export default Stars;
