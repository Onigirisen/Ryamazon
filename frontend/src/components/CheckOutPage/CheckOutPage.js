import confirm from "../../assets/images/ok-hand.png";
import gitHub from "../../assets/images/github.png";
import linkedIn from "../../assets/images/linkedin.png";
import { Link } from "react-router-dom";
const CheckOutPage = () => {
  return (
    <div className="checkout-page">
      <div className="check-out-container">
        <div className="order-confirm">
          <img src={confirm} alt="" /> Thank you, your order has been placed
        </div>
        <div className="order-message">
          While waiting for your order, please feel free to browse my other
          wares.
          <div className="checkout-icons">
            <div>
              <Link to="https://github.com/Onigirisen">
                <img src={gitHub} alt="" />
              </Link>
            </div>
            <Link to="linkedin.com/in/ryan-kok-6ab427b6">
              <img src={linkedIn} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
