import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/product";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../store/product";
import { FaStar } from "react-icons/fa";
import {
  createReview,
  getReview,
  fetchReview,
  updateReview,
} from "../../store/review";

const ReviewForm = () => {
  const { productId } = useParams();
  const { reviewId } = useParams();
  const review = useSelector(getReview(reviewId)) || {};
  const product = useSelector(getProduct(productId)) || {};
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [rating, setRating] = useState(review ? review.rating : 1);
  const [title, setTitle] = useState(review ? review.title : "");
  const [body, setBody] = useState(review ? review.body : "");

  if (!sessionUser) history.push("./login");

  useEffect(() => {
    if (reviewId) dispatch(fetchReview(productId, reviewId));
  }, [reviewId, dispatch]);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  useEffect(() => {
    if (review.id) {
      setRating(review.rating);
      setBody(review.body);
      setTitle(review.title);
    }
  }, [review.id, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && title && body) {
      if (!reviewId) {
        dispatch(createReview({ title, body, rating, productId }, productId));
      } else {
        dispatch(
          updateReview(productId, {
            ...review,
            title,
            body,
            rating,
          })
        );
      }
      setTimeout(() => {
        history.replace(`/products/${productId}`);
      }, 500);
    }
  };

  return (
    <div className="review-form-container">
      <div className="review-form-inner-container">
        <div className="review-form-title">
          <h1>Create Review</h1>
          <div className="review-product">
            <img
              className="review-product-image"
              src={product.photoURL}
              alt=""
            />
            <div className="review-product-name">{product.name}</div>
          </div>
          <div className="review-product-hr" />
        </div>
        <form className="review-form" onSubmit={handleSubmit}>
          <h2>Overall rating</h2>
          <div className="review-values">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    className="radio-rating"
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={(e) => setRating(ratingValue)}
                  />
                  <FaStar
                    className="faStar"
                    color={ratingValue <= rating ? "#ffa41c" : "e4e5e9"}
                    size={35}
                  />
                </label>
              );
            })}
          </div>
          <div className="review-product-hr" />
          <div className="review-headline">
            <h2>Add a headline</h2>
            <input
              type="text"
              placeholder="What's most important to know?"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="headline-input"
            />
          </div>
          <div className="review-product-hr" />
          <div className="review-body">
            <h2>Add a written review</h2>
            <textarea
              placeholder="What did you like or dislike? What did you use this product for?"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="review-body-textarea"
            />
          </div>
          <div className="review-product-hr" />
          <div className="review-submit-button-container">
            <button
              type="submit"
              className="review-create-button"
              onClick={handleSubmit}
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
