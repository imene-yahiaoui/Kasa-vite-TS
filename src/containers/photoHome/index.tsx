import React from "react";
import "./style.scss";
import ImageDesktop from "../../assets/images/headerDesktop.png";



const PhotoHome: React.FC =() => {
  return (
    <div className="home">
      <img className="home-img" src={ImageDesktop} alt="natur" />
      <div className="home-p">
        <p className="home-text">Chez vous</p>
        <p className="home-paragraphe">partout et ailleurs</p>
      </div>
    </div>
  );
};

export default PhotoHome;
