import React from "react";
import "./style.scss";
import Collapse from "../../components/collapse";
import Picture from "../../components/picture";
import Photo from "../../assets/images/about.png";
type AboutProps = {
  dataAbout: {
    key: number | string;
    title: string;
    text: string;
  
  }[];
 
 
  
};

const About: React.FC<AboutProps> = ({ dataAbout }) => {
  return (
    <div className="collapse_continer">
      <Picture photo={Photo} />
      {dataAbout.map((boucle) => (
        <div className="App" key={boucle.key.toString()}>
          <Collapse
            key={boucle.key.toString()}
            title={boucle.title.toString()}
            text={boucle.text.toString()}
          />
        </div>
      ))}
    </div>
  );
};

export default About;
