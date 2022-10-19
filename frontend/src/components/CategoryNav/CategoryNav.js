import { Link } from "react-router-dom";
const CategoryNav = () => {
  return (
    <div className="category-navbar">
      <div className="category-nav-container">
        <Link>
          <div className="nav-link">
            <span className="nav-link-bottom-line">
              {" "}
              <i className="fa-solid fa-bars"></i> All{" "}
            </span>
          </div>
        </Link>
        <Link to="/books">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Books </span>
          </div>
        </Link>
        <Link to="/electronics">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Electronics </span>
          </div>
        </Link>
        <Link to="computers">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Computers </span>
          </div>
        </Link>
        <Link to="/petsupplies">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Pet Supplies </span>
          </div>
        </Link>
        <Link to="/beautyhealth">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Beauty & Health </span>
          </div>
        </Link>
        <Link to="toyskidsbaby">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Toys, Kids & Baby </span>
          </div>
        </Link>
        <Link to="sports">
          <div className="nav-link">
            <span className="nav-link-bottom-line"> Sports </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryNav;
