import "./style.scss";
import { useState } from "react";

type CollapseProps = {
  title: string;
  text?: string;
  ArryText?: JSX.Element[]; };

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
