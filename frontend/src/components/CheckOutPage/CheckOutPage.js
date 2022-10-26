import confirm from "../../assets/images/ok-hand.png";
import gitHub from "../../assets/images/github.png";
import linkedIn from "../../assets/images/linkedin.png";

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
              <a href="https://github.com/Onigirisen" target="_blank">
                <img src={gitHub} alt="" />
              </a>
            </div>
            <a href="https://linkedin.com/in/ryan-kok-6ab427b6" target="_blank">
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
