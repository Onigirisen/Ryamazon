import { Link } from "react-router-dom";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useSelector } from "react-redux";
import ReviewItem from ".";
import { deleteReview } from "../../store/review";
const ReviewsIndex = ({
  product: { id, reviews, averageRating, countOfReviews },
}) => {
  const userId = useSelector((state) => state.session.user?.id);
  const sessionUser = useSelector((state) => state.session.user);
  const ratingStars = (rating) => {
    let fullStars = rating;

    const starsArr = [];
    for (let stars = 0; stars < 5; stars++) {
      if (fullStars >= 1) {
        starsArr.push(<BsStarFill key={stars} />);
        fullStars -= 1;
      } else if (fullStars === 0) {
        starsArr.push(<BsStar key={stars} />);
      } else {
        if (fullStars < 0.3) {
          starsArr.push(<BsStar key={stars} />);
        } else if (fullStars > 0.7) {
          starsArr.push(<BsStarFill key={stars} />);
        } else {
          starsArr.push(<BsStarHalf key={stars} />);
        }
        fullStars = 0;
      }
    }
    return starsArr;
  };

  const sortReviews = (reviews) => {
    // react doesn't allow state to be modified, so reviews arr from state must be made into a new arr
    let tempReviews = [...reviews];
    return tempReviews.sort((a, b) => b.id - a.id);
  };

  return (
    <div className="reviews">
      <div className="reviews-left">
        <h3>Customer reviews</h3>
        <div className="reviews-rating">
          <div className="stars">{ratingStars(averageRating)}</div>
          <div>{Math.round(averageRating * 10) / 10} out of 5</div>
        </div>
        <div className="reviews-global-ratings">
          {countOfReviews} global ratings
        </div>
        <div className="reviews-bottom">
          <h4>Review this product</h4>
          <div className="reviews-share">
            Share your thoughts with other customers
          </div>
          {sessionUser && (
            <Link to={`/products/${id}/review/`}>
              <button className="button5">Write a customer review</button>
            </Link>
          )}
          {!sessionUser && (
            <Link to={`/login`}>
              <button className="button5">Write a customer review</button>
            </Link>
          )}
        </div>
      </div>
      <ul>
        {reviews ? (
          //sorts reviews, then maps them into individual components
          sortReviews(reviews).map((review, key) => (
            <ReviewItem
              key={key}
              review={review}
              deleteReview={deleteReview}
              currentUserId={userId}
              productId={id}
            />
          ))
        ) : (
          <div>Loading</div>
        )}
      </ul>
    </div>
  );
};

export default ReviewsIndex;
