import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

type FrameProps = {
  id:string;
  title: string;
  cover: string;
};

/**
 * Frame Component.
 *
 * @param {Object} FrameProps - Props for the Frame component.
 * @param {string} FrameProps.id - The ID of the frame.
 * @param {string} FrameProps.cover - The URL of the frame cover image.
 * @param {string} FrameProps.title - The title of the frame.
 * @returns {JSX.Element} - The JSX element representing the Frame component.
 */



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
