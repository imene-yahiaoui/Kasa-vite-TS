import "./style.scss";
import { useState } from "react";

type CollapseProps = {
  title: string;
  text?: string;
  ArryText?: JSX.Element[];
};

/**
 * Collapse Component.
 *
 * @param {Object} CollapseProps - Props for the Collapse component.
 * @param {string} CollapseProps.title - The title of the collapse section.
 * @param {string} CollapseProps.text - The main text content for the collapse section.
 * @param  CollapseProps.ArryText - An array of JSX elements representing additional text in a list format.
 * @returns {JSX.Element} - The JSX element representing the Collapse component.
 */

const Collapse: React.FC<CollapseProps> = ({ title, text, ArryText }) => {
  const [open, setOpen] = useState("none");

  return (
    <div className="collapse">
      <div className="collapse-title">
        <h6>{title}</h6>
        <div>
          <i
            style={{ display: open }}
            className="fa-solid fa-angle-up"
            onClick={() => setOpen(open === "none" ? "block" : "none")}
          ></i>

          <i
            style={{ display: open === "none" ? "block" : "none" }}
            className="fa-solid fa-angle-down"
            onClick={() => setOpen(open === "none" ? "block" : "none")}
          ></i>
        </div>
      </div>
      <div className="collapse-article" style={{ display: open }}>
        <p>{text}</p>
        <ul className="ArryText">{ArryText} </ul>
      </div>
    </div>
  );
};

export default Collapse;
