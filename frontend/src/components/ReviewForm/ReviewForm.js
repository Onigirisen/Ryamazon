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
    dispatch(fetchReview(productId, reviewId));
  }, [productId, reviewId, dispatch]);
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
      dispatch(createReview({ title, body, rating, productId: product.id }));
    } else {
      dispatch(
        updateReview({ ...review, title, body, rating, productId: product.id })
      );
    }
    setTimeout(() => {
      history.replace(`/products/${productId}`);
    }, 500);
  };

  return (
    <div className="review-form-container">
      <div className="review-form-title">
        <h1>Create Review</h1>
        <div className="review-product">
          <img className="review-productIMG" src={product.photoURL} alt="" />
          <div className="review-productname">{product.name}</div>
        </div>
      </div>
      <form className="review-form" onSubmit={handleSubmit}>
        {/* <div
          onChange={(e) => {
            setRating(e.target.value);
          }}
          className="review-rating"
        > */}
        <h2>Overall rating</h2>
        <div className="review-values">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  className="radio-rating"
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={(e) => setRating(ratingValue)}
                />
                <FaStar
                  className="faStar"
                  color={ratingValue <= rating ? "#fcd200" : "e4e5e9"}
                  size={50}
                />
              </label>
            );
          })}
        </div>

        <div className="review-headline">
          <h3>Add a headline</h3>
          <input
            type="text"
            placeholder="What's most important to know?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="review-body">
          <h4>Add a written review</h4>
          <textarea
            placeholder="What did you like or dislike? What did you use this product for?"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </div>
        <button type="submit" className="button6" onClick={handleSubmit}>
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
