import React from "react";
import "./style.scss";
type StarsProps = {
  color: string;
};
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
