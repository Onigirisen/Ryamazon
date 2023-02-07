export const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const getProducts = ({ products }) => {
  return products ? Object.values(products) : [];
};

export const getProduct =
  (productId) =>
  ({ products }) => {
    return products ? products[productId] : null;
  };

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  dispatch(receiveProducts(data));
};

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);
  const data = await res.json();
  dispatch(receiveProduct(data));
};

export const fetchProductsByCategory = (category) => async (dispatch) => {
  const res = await fetch(
    "/api/products?" + new URLSearchParams({ category }),
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await res.json();
  dispatch(receiveProducts(data));
};

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      newState[action.product.id] = action.product;
      return newState;
    default:
      return state;
  }
};

export default productsReducer;
