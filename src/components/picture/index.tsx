import React from "react";
import "./style.scss";

type PictureProps = {
  photo: string;
  text?: string;
  paragraphe?: string;
};

/**
 * Picture Component.
 *
 * @param {Object} PictureProps - Props for the Picture component.
 * @param {string} PictureProps.photo - The URL of the image for the Picture.
 * @param {string} PictureProps.text - The text content for the Picture.
 * @param {string} PictureProps.paragraphe - The paragraph content for the Picture.
 * @returns {JSX.Element} - The JSX element representing the Picture component.
 */


const Picture: React.FC<PictureProps> = ({ photo, text, paragraphe }) => {
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
