import shoppingCart from "../../assets/images/shopping-cart-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="https://www.nicepng.com/png/detail/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt="logo"
          className="logo"
        />
      </Link>

      <div className="search-bar">
        <input type="text" className="search-bar-input" />
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          alt="magnifying-glass"
          className="search-bar-icon"
        />
      </div>

      <div className="nav-links-container"></div>
      <Link to="/login">
        <div className="nav-link">
          <span className="nav-link-top-line">Hello Guest</span>
          <span className="nav-link-bottom-line">Sign In</span>
        </div>
      </Link>
      <div className="nav-link">
        <span className="nav-link-top-line">Returns</span>
        <span className="nav-link-bottom-line">& Orders</span>
      </div>
      <div className="nav-link">
        <span className="nav-link-top-line">Your </span>
        <span className="nav-link-bottom-line">Prime</span>
      </div>

      <div className="nav-shopping-cart">
        <img
          src={shoppingCart}
          alt="shopping-cart-icon"
          className="shopping-cart-icon"
        />
        <span className="nav-link-bottom-line nav-shopping-cart-counter">
          0
        </span>
      </div>
    </div>
  );
};

export default Navbar;
