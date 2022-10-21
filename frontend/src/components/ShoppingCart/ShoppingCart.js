import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import shoppingCart from "../../assets/images/shopping-cart-2.png";
import { clearCart, fetchCart } from "../../store/cart";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user?.id);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
    } else {
      dispatch(clearCart());
    }
    console.log(cart);
  }, [userId]);

  const cartCounter = (cart) => {
    let cartSum = 0;
    cart.forEach((item) => {
      cartSum += item.quantity;
    });
    return cartSum;
  };

  return (
    <div className="nav-link nav-shopping-cart">
      <span className="nav-link-bottom-line nav-shopping-cart-counter">
        {cart.length ? cartCounter(cart) : 0}
      </span>
      <img
        src={shoppingCart}
        alt="shopping-cart-icon"
        className="shopping-cart-icon"
      />
    </div>
  );
};

export default ShoppingCart;
