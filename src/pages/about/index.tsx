import React from "react";
import "./style.scss";
import Collapse from "../../components/collapse";
import Picture from "../../components/picture"
import Photo from "../../assets/images/about.png";
type AboutProps = {
  PictureProps:{
    photo:string;
  }
  dataAbout :{
    key:number;
    title: string;
    text: string;
  }
};

const About: React.FC<AboutProps> = ({dataAbout}) => {

  return (
   
    <div className="collapse_continer">
      <Picture photo={Photo} />
    {dataAbout.map((boucle) => (
    <div className="App" key={boucle.key}>
      <Collapse key={boucle.key} title={boucle.title} text={boucle.text} />
    </div>
       ))}
       </div>
  );
};

export default About;
