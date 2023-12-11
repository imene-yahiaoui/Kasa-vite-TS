import React from "react";
import "./style.scss";

type HostProps ={
    title: string;
    location: string;
  }
const Info: React.FC<HostProps> = ({title ,location}) => {
  return (
    <div className="info">
      <h2 className="info_titre">{title}</h2>
      <p className="info_titre_localitation">{location}</p>
    </div>
  );
};

export default Info;