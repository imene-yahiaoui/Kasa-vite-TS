import React from 'react';
import "../footer/style.scss";
import LogoFooter from "../../assets/images/logoFooter.png";
const Footer : React.FC = () => {
  return (
    <div className="footer">
      <img src={LogoFooter} alt=" logo kasa"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;