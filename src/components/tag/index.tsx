import React from "react";
import "./style.scss";

type tagProps = {
  tags: string;
};

/**
 * Tag Component.
 *
 * @param {Object} TagProps - Props for the Tag component.
 * @param {string} TagProps.tags - The content of the tag.
 * @returns {JSX.Element} - The JSX element representing the Tag component.
 */

const Tag: React.FC<tagProps> = ({ tags }) => {
  return (
    <li className="tag-container">
      <p className="tag">{tags}</p>
    </li>
  );
};

export default Tag;
