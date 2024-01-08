import React from "react";
import "./style.scss";

type HostProps = {
  name: string;
  picture: string;
};

/**
 * Host Component.
 *
 * @param {Object} HostProps - Props for the Host component.
 * @param {string} HostProps.name - The name of the host.
 * @param {string} HostProps.picture - The URL of the host's picture.
 * @returns {JSX.Element} - The JSX element representing the Host component.
 */

const Host: React.FC<HostProps> = ({ name, picture }) => {
  return (
    <div className="info_utilisateur">
      <p className="info_utilisateur_name">{name}</p>
      <img className="info_utilisateur_img" src={picture} alt="utilisateur" />
    </div>
  );
};

export default Host;
