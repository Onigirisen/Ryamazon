import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <div className="category-navbar">
      <div className="category-nav-container">
        <Link to="/products">
          <div className="nav-link">
            <span className="nav-link-bottom-line">
              {" "}
              <i className="fa-solid fa-bars"></i> All{" "}
            </span>
          </div>
        </Link>
        <Link to="/category/books">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Books </span>
          </div>
        </Link>
        <Link to="/category/electronics">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Electronics </span>
          </div>
        </Link>
        <Link to="/category/computers">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Computers </span>
          </div>
        </Link>
        <Link to="/category/petsupplies">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Pet Supplies </span>
          </div>
        </Link>
        <Link to="/category/beautyhealth">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Beauty & Health </span>
          </div>
        </Link>
        <Link to="/category/toyskidsbaby">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Toys, Kids & Baby </span>
          </div>
        </Link>
        <Link to="/category/sports">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Sports </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryNav;
