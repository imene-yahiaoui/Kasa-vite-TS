import React from "react";
import "./style.scss";

type HostProps ={
  name: string;
  picture: string;
}

const Host: React.FC<HostProps> = ({ name, picture }) => {
  return (
    <div className="info_utilisateur">
      <p className="info_utilisateur_name">{name}</p>
      <img className="info_utilisateur_img" src={picture} alt="utilisateur" />
    </div>
  );
};

export default Host;
