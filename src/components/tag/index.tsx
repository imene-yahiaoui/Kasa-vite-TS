import React from "react";
 import "./style.scss"

 type tagProps={
    tags:string;
 }

const Tag : React.FC<tagProps> = ({tags}) => {
  return (
    <li className="tag-container">
      <p className="tag">{tags}</p>
    </li>
  );
};

export default Tag;