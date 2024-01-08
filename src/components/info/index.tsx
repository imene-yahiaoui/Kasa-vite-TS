import React from "react";
import "./style.scss";

type HostProps = {
  title: string;
  location: string;
};

/**
 * Info Component.
 *
 * @param {Object} HostProps - Props for the Info component.
 * @param {string} HostProps.title - The title for the Info component.
 * @param {string} HostProps.location - The location for the Info component.
 * @returns {JSX.Element} - The JSX element representing the Info component.
 */

const Info: React.FC<HostProps> = ({ title, location }) => {
  return (
    <div className="info">
      <h2 className="info_titre">{title}</h2>
      <p className="info_titre_localitation">{location}</p>
    </div>
  );
};

export default Info;
