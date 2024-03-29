import React from "react";
import logo from "../../assets/images/ry_white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="col-sm-3">
            <h5 className="footer-h5">About Us</h5>
            <ul className="footer-ul">
              <li>
                <a
                  className="footer-a"
                  href="https://onigirisen.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Company Information
                </a>
              </li>
              <li>
                <a
                  className="footer-a"
                  href="mailto:ryanroykok@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5 className="footer-h5">Follow Us</h5>
            <ul className="social-media">
              <li>
                <a
                  className="footer-a"
                  href="https://www.linkedin.com/in/ryan-kok-6ab427b6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="footer-a"
                  href="https://github.com/Onigirisen"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  className="footer-a"
                  href="https://angel.co/u/ryan-kok"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-angellist"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo-footer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
