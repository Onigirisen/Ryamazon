import emptyCartBackground from "../../assets/images/empty-cart-background.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  updateCart,
  removeAllItemsFromCart,
  removeItemFromCart,
} from "../../store/cart";
import verified from "../../assets/images/verified.png";

const Cart = () => {
  const dispatch = useDispatch();
  const firstUpdate = useRef(false);
  const carts = useSelector((state) => state.cart);
  const [cartState, setCartState] = useState(initializeQtyData(carts));
  const [targetCart, setTargetCart] = useState(null);
  const userId = useSelector((state) => state.session.user?.id);
  const [subTotal, setSubtotal] = useState(0.0);
  const history = useHistory();
  console.log(cartState);
  useEffect(() => {
    calculateSubtotal();
  });
  useEffect(() => {
    if (targetCart) {
      dispatch(
        updateCart(
          cartState[targetCart],
          userId,
          cartState[targetCart].quantity
        )
      );
    }
  }, [cartState, dispatch]);

  useEffect(() => {
    if (firstUpdate.current) {
      return;
    }
    if (carts.length) {
      setCartState(initializeQtyData(carts));
      firstUpdate.current = true;
    }
  }, [carts.length]);

  const calculateSubtotal = () => {
    let sum = 0;
    carts.forEach((cartItem) => {
      sum += cartItem.quantity * cartItem.price;
    });

    setSubtotal(Math.round(sum * 100) / 100);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeAllItemsFromCart(userId));
    history.push("/cart/checkout");
  };

  return (
    <div className="cart">
      {carts.length === 0 ? (
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
              {carts.map((cartItem, idx) => (
                <div key={`cartItem-${idx}`}>
                  <li className="item-in-cart">
                    <div className="item-in-cart-photo-container">
                      <Link to={`/products/${cartItem.productId}`}>
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
                          <Link to={`/products/${cartItem.productId}`}>
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
                          {/* <div className="cart-item-quantity">
                            Qty: {cartItem.quantity}
                          </div> */}
                          <div className="select-wrap">
                            <label>
                              Qty:
                              <select
                                className="qty"
                                value={cartState[cartItem.id]?.quantity}
                                onChange={(e) => {
                                  setCartState({
                                    ...cartState,
                                    [cartItem.id]: {
                                      ...cartItem,
                                      quantity: e.target.value,
                                    },
                                  });
                                  setTargetCart(cartItem.id);
                                }}
                              >
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
                          <div className="cart-item-delete-container">
                            <button
                              className="cart-item-delete-button"
                              onClick={(e) => {
                                dispatch(
                                  removeItemFromCart(userId, cartItem.productId)
                                );
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
                Subtotal ({carts.length} items):
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
                Subtotal ({carts.length} items):
              </div>
              <div className="check-out-items-subtotal-number">${subTotal}</div>
            </div>
            <div className="check-out-button-container">
              <button className="check-out-button" onClick={handleClick}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const initializeQtyData = (carts) => {
  const result = {};
  carts.forEach((cart) => {
    result[cart.id] = cart;
  });
  return result;
};

export default Cart;
