import React from "react";
import "./style.scss";

type PictureProps={
  photo:string;
  text:string;
  paragraphe:string;
}
const Picture: React.FC <PictureProps> = ({ photo,text ,paragraphe }) => {
  return (
    <div className="home">
      <img className="home-img" src={photo} alt="natur" />
      <div className="home-p">
         <p className="home-text"> {text}</p>
    <p className="home-paragraphe"> {paragraphe}</p>
      </div>
    </div>
  );
};

export default Picture;
