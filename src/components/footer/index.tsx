import React from "react";
import "../footer/style.scss";
import LogoFooter from "../../assets/images/logoFooter.png";

/**
 * Footer Component.
 *
 * @component
 * @returns {JSX.Element} - The JSX element representing the Footer component.
 */

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <img src={LogoFooter} alt=" logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
