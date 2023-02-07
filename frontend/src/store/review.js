import csrfFetch from "./csrf";
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const getReviews = ({ reviews }) => {
  return reviews ? Object.values(reviews) : [];
};

export const getReview =
  (reviewId) =>
  ({ reviews }) => {
    return reviews ? reviews[reviewId] : null;
  };

export const fetchReviews = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}/reviews`);
  const data = await res.json();
  dispatch(receiveReviews(data));
};

export const fetchReview = (productId, reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}reviews/${reviewId}`);
  const data = await res.json();
  console.log("before dispatch", data);
  dispatch(receiveReview(data));
  console.log("after dispatch", data);
};

export const createReview = (review, productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(receiveReview(data));
};

export const updateReview = (productId, review) => async (dispatch) => {
  const res = await csrfFetch(
    `/api/products/${productId}/reviews/${review.id}`,
    {
      method: "PATCH",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  dispatch(receiveReview(data));
};

export const deleteReview = (productId, reviewId) => async (dispatch) => {
  const res = await csrfFetch(
    `/api/products/${productId}/reviews/${reviewId}`,
    {
      method: "DELETE",
      body: JSON.stringify({ reviewId }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await res.json();
  dispatch(receiveReview(data));
};

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case RECEIVE_REVIEWS:
      return action.reviews;
    case REMOVE_REVIEW:
      const stateArr2 = Object.values(newState);
      let updatedState = stateArr2.filter(
        (review) => review.id !== action.reviewId
      );
      return updatedState;
    default:
      return state;
  }
};

export default reviewsReducer;
