import React from "react";
import notFound from "../../assets/images/404.png";
import { Link } from "react-router-dom";
import "./style.scss";

/**
 * NotFound Component.
 *
 * @returns {JSX.Element} - The JSX element representing the NotFound component.
 */
const NotFound: React.FC = () => {
  return (
    <div className="notFound">
      <img className="notFound-img" src={notFound} alt="logo 404" />

      <p className="notFound-p">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound;
