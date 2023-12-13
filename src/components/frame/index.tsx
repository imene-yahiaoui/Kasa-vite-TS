import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

type FrameProps = {
  id:string;
  title: string;
  cover: string;
};

const Frame: React.FC<FrameProps> = (props) => {
  return (
    <NavLink to={`/Accommodate/${props.id}`} key={props.id}>
      <div className="frame">
        <div className="containerFrame">
          <img src={props.cover} alt={props.title}></img>
          <p>{props.title}</p>
        </div>
        <div className="middle"> </div>
      </div>
    </NavLink>
  );
};

export default Frame;
