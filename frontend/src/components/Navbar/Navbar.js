// import shoppingCart from "../../assets/images/shopping-cart-2.png";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/ry_white.png";
import ShoppingCart from "../ShoppingCart";
import { useState } from "react";
import { fetchSearches } from "../../store/search";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const sessionUser = useSelector((state) => state.session.user);

  const handleClick = (e) => {
    dispatch(sessionActions.logout());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearches(e.target.value));
    history.push(`/search/${searchTerm}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <form className="search-bar" onSubmit={handleSubmit}>
        <div className="category-drop-down-container">
          <select className="category-drop-down">
            <option value="all">All</option>
            {/* <option value="best sellers">Best Sellers</option> */}
          </select>
        </div>
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search Ryamazon"
          onChange={handleChange}
        />
        <div className="search-bar-button-container">
          <button type="submit" className="search-bar-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>

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
        <Link to="/login" className="nav-link-a">
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
      <Link to="/cart">
        <ShoppingCart />
      </Link>
    </div>
  );
};

export default Navbar;
