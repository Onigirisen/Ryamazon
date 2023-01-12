export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECIEVE_REVIEW = "reviews/RECIEVE_REVIEW";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveReview = (review) => ({
  type: RECIEVE_REVIEW,
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

export const fetchReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviewss");
  const data = await res.json();
  dispatch(receiveReviews(data));
};

export const fetchReview = (reviewId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${reviewId}`);
  const data = await res.json();
  dispatch(receiveReview(data));
};
