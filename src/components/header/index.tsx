import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
import './style.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/">
        {/* <img className="logo" src={} alt="logo Kasa" /> */}
      </Link>
      <ul className="nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
