import emptyCartBackground from "../../assets/images/empty-cart-background.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addItemToCart,
  removeAllItemsFromCart,
  removeItemFromCart,
} from "../../store/cart";
import verified from "../../assets/images/verified.png";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.session.user?.id);
  const [subTotal, setSubtotal] = useState(0.0);
  useEffect(() => {
    calculateSubtotal();
  });

  const calculateSubtotal = () => {
    let sum = 0;
    cart.forEach((cartItem) => {
      sum += cartItem.quantity * cartItem.price;
    });

    setSubtotal(Math.round(sum * 100) / 100);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeAllItemsFromCart(userId));
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <div className="empty-cart-message">
            <span>Your Ryamazon Cart is empty</span>
            <Link to="/">
              <button className="continue-shopping">Continue Shopping</button>
            </Link>
          </div>
          <img
            src={emptyCartBackground}
            alt="Empty Cart Background"
            className="empty-cart-background"
          />
        </div>
      ) : (
        <div className="cart-items">
          <div className="cart-items-container">
            <div className="cart-items-top">
              <h1>Shopping Cart</h1>
            </div>
            <div className="price-row">Price</div>
            <hr />
            <ul>
              {cart.map((cartItem, idx) => (
                <div key={`cartItem-${idx}`}>
                  <li className="item-in-cart">
                    <div className="item-in-cart-photo-container">
                      <Link to={`/products/${cartItem.id}`}>
                        <img
                          src={cartItem.photoURL}
                          alt=""
                          className="item-in-cart-photo"
                        />
                      </Link>
                    </div>
                    <div className="cart-items-list-container">
                      <div className="cart-item-info-container">
                        <div className="cart-item-name">
                          <Link to={`/products/${cartItem.id}`}>
                            {cartItem.name}
                          </Link>
                        </div>
                      </div>
                      <div className="bottom-info-container">
                        <div className="cart-item-price">
                          <div className="cart-item-price-sign">$</div>
                          <div className="cart-item-price-dollars">
                            {cartItem.price.toString().split(".")[0]}
                          </div>
                          <div className="cart-item-price-cents">
                            .{cartItem.price.toString().split(".")[1]}
                          </div>
                        </div>
                        <div className="cart-item-category">
                          <span className="department">Department:</span>
                          <span>{cartItem.category}</span>
                        </div>
                        <div className="cart-item-instock">In Stock</div>
                        <div className="cart-item-free">
                          <span className="free-shipping">
                            Eligible for FREE Shipping
                          </span>
                          <span className="and-symbol"> & </span>
                          <span className="free-returns">FREE Returns</span>
                        </div>
                        <div className="qty-button-container">
                          <div className="cart-item-quantity">
                            Qty: {cartItem.quantity}
                          </div>
                          <div className="cart-item-delete-container">
                            <button
                              className="cart-item-delete-button"
                              onClick={(e) => {
                                {
                                  dispatch(
                                    removeItemFromCart(userId, cartItem.id)
                                  );
                                }
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <hr />
                </div>
              ))}
            </ul>
            <div className="cart-items-subtotal">
              <div className="subtotal-text">
                Subtotal ({cart.length} items):
              </div>
              <div className="subtotal-number">${subTotal}</div>
            </div>
          </div>

          <div className="check-out-items-container">
            <div>
              <div className="check-out-small-text">
                <div className="img-span-container">
                  <img src={verified} alt="" className="verified-img" />
                  <span className="qualified-text">
                    Your order qualifies for FREE Shipping.
                  </span>
                </div>
                <div>
                  <span className="choose-option-text">
                    Choose this option at checkout.
                  </span>
                </div>
              </div>
            </div>
            <div className="checkout-price-container">
              <div className="check-out-items-subtotal-text">
                Subtotal ({cart.length} items):
              </div>
              <div className="check-out-items-subtotal-number">${subTotal}</div>
            </div>
            <div className="check-out-button-container">
              <Link to="/cart/checkout">
                <button className="check-out-button" onClick={handleClick}>
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
