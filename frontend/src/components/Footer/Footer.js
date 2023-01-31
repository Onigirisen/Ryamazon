import React from "react";
import logo from "../../assets/images/ry_white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h5>About Us</h5>
            <ul>
              <li>
                <a href="https://onigirisen.github.io/">Company Information</a>
              </li>
              <li>
                <a href="mailto:ryanroykok@gmail.com">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Follow Us</h5>
            <ul className="social-media">
              <li>
                <a href="https://www.linkedin.com/in/ryan-kok-6ab427b6/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Onigirisen">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://angel.co/u/ryan-kok">
                  <i class="fa-brands fa-angellist"></i>
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
