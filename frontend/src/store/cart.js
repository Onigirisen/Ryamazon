import csrfFetch from "./csrf.js";
export const RECEIVE_CART = "cart/RECEIVE_CART";
export const RECEIVE_PRODUCT = "cart/RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "cart/REMOVE_PRODUCT";
export const REMOVE_PRODUCTS = "cart/REMOVE_PRODUCTS";
export const CLEAR_CART = "cart/CLEAR_CART";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const addProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const updateProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId,
});

export const emptyCart = () => ({
  type: REMOVE_PRODUCTS,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const fetchCart = (userId) => async (dispatch) => {
  const res = await fetch(`/api/carts/${userId}`);
  const data = await res.json();
  dispatch(receiveCart(data));
};

export const addItemToCart =
  (user_id, product_id, quantity) => async (dispatch) => {
    const res = await csrfFetch("/api/carts", {
      method: "POST",
      body: JSON.stringify({ cart: { user_id, product_id, quantity } }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    dispatch(receiveCart(data));
  };

export const updateCart = (cart, user_id, quantity) => async (dispatch) => {
  console.log(cart.id);
  const res = await csrfFetch(`/api/carts/${cart.id}`, {
    method: "PATCH",
    body: JSON.stringify({ cart: { user_id, quantity } }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  dispatch(receiveCart(data));
};

export const removeItemFromCart = (user_id, product_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts/${user_id}`, {
    method: "DELETE",
    body: JSON.stringify({ product_id }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await res.json();
  dispatch(receiveCart(data));
};

export const removeAllItemsFromCart = (user_id) => async (dispatch) => {
  const res = await csrfFetch("/api/destroy_cart_items/", {
    method: "DELETE",
    body: JSON.stringify({ user_id }),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(receiveCart(data));
};

const cartReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART:
      return action.cart.cart;
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
