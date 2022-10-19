import shoppingCart from "../../assets/images/shopping-cart-icon.png";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/ry_white.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const handleClick = (e) => {
    dispatch(sessionActions.logout());
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <div className="search-bar">
        <div className="category-drop-down-container">
          {/* <div className="category-fascade-container">
            <span className="category-fascade">All</span>
            <i className="fa-sharp fa-solid fa-caret-down"></i>
          </div> */}
          <select className="category-drop-down">
            <option value="all">All</option>
            <option value="best sellers">Best Sellers</option>
          </select>
        </div>
        <input type="text" className="search-bar-input" />
        <div className="search-bar-button-container">
          <button type="submit" className="search-bar-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="nav-links-container"></div>
      {sessionUser && (
        <Link to="/" onClick={handleClick}>
          <div className="nav-link">
            <span className="nav-link-top-line">Hello {sessionUser.name}</span>
            <span className="nav-link-bottom-line">Sign out</span>
          </div>
        </Link>
      )}
      {!sessionUser && (
        <Link to="/login">
          <div className="nav-link">
            <span className="nav-link-top-line">Hello Guest</span>
            <span className="nav-link-bottom-line">Sign In</span>
          </div>
        </Link>
      )}
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
