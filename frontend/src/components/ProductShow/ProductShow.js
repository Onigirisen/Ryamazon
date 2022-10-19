import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/product";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(getProduct(productId)) || {};
  console.log(product);
  console.log(productId);

  useEffect(() => {
    if (productId) dispatch(fetchProduct(productId));
  }, [productId]);

  const freeDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 6);
    return deliveryDate.toDateString().slice(0, 10);
  };

  const fastestDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    return deliveryDate.toDateString().slice(0, 10);
  };

  const orderBeforeTime = () => {
    const today = new Date();
    const time = `${23 - today.getHours()} hrs and ${
      59 - today.getMinutes()
    } mins.`;
    return time;
  };

  const returnableDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 60);
    return deliveryDate.toDateString().slice(0, 10);
  };

  return (
    <div className="product-show-container">
      <div className="product-photo-container">
        <img src={product.photoURL} alt="" />
      </div>
      <div className="product-mid-section">
        <h1>{product.name}</h1>
        {/* <hr /> */}
        <div className="product-price-container">
          <div className="product-price-name">Price:</div>
          <div className="product-price">${product.price}</div>
        </div>
        <hr />
        <div className="product-description-container">
          <h2>About this item</h2>
          <div className="product-description">{product.description}</div>
        </div>
      </div>
      <div className="product-ordering-container">
        <div className="product-ordering-inner">
          <div className="product-price-inner">${product.price}</div>
          <div className="free-delivery">
            <span className="free-delivery-text">FREE Delivery</span>
            <span className="free-delivery-date">{freeDeliveryDate()}</span>
          </div>
          <div className="fastest-delivery">
            <span className="fastest-delivery-text"> Or fastest delivery</span>
            <span className="fastest-delivery-date">
              {fastestDeliveryDate()}.
            </span>
            <span className="fastest-delivery-orderwithin">Order within</span>
            <span className="fastest-delivery-time">{orderBeforeTime()}</span>
          </div>
          <div className="in-stock">In Stock.</div>
          <div className="product-order-form">
            <form>
              <div className="select-wrap">
                <label>
                  Qty:
                  <select className="qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
              </div>
              <div className="ordering-button-container">
                <input
                  type="submit"
                  className="add-cart-button"
                  value="Add to Cart"
                />
              </div>
            </form>
          </div>
          <div className="ordering-button-container">
            <button className="buy-now-button">Buy Now</button>
          </div>
          <div className="secure-transaction">
            <i className="fa-solid fa-lock"></i>
            <span>Secure transaction</span>
          </div>
          <div className="ships-from-container">
            <div className="ships-from-text">Ships from</div>
            <div className="ryamazon">Ryamazon.com</div>
          </div>
          <div className="sold-by-container">
            <div className="sold-by-text">Sold by</div>
            <div className="ryamazon">Ryamazon.com</div>
          </div>
          <div className="return-policy-container">
            <span className="return-policy">Return policy:</span>
            <span className="returnable-date">
              Returnable until {returnableDate()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
