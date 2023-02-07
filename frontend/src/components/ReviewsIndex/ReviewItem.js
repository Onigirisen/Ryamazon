import { BsStarFill, BsStar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ReviewItem = (props) => {
  const dispatch = useDispatch();

  const ratingStars = (rating) => {
    let fullStars = rating;

    const starsArr = [];
    for (let stars = 0; stars < 5; stars++) {
      if (fullStars >= 1) {
        starsArr.push(<BsStarFill key={stars} />);
        fullStars -= 1;
      } else {
        starsArr.push(<BsStar key={stars} />);
      }
    }
    return starsArr;
  };

  const formatDate = (date) => {
    const dateArray = new Date(date).toDateString().split(" ");
    const dateString = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
    return dateString;
  };

  const handleClick = (e) => {
    dispatch(props.deleteReview(props.productId, props.review.id));
    // window.location.reload();
  };

  return (
    <li>
      <div className="review-profile">
        <div className="review-profile-pic">
          <CgProfile />
        </div>
        <div className="review-profile-name">{props.review.user?.name}</div>
      </div>
      <div className="review-header">
        <div className="stars">{ratingStars(props.review.rating)}</div>
        <div className="review-title">{props.review.title}</div>
      </div>
      <div className="review-date">
        Reviewed on {formatDate(props.review.createdAt)}
      </div>
      <div className="review-purchase">Verified Purchase</div>
      <div>{props.review.body}</div>
      {props.review.userId === props.currentUserId ? (
        <div className="review-buttons">
          <Link to={`/products/${props.productId}/review/${props.review.id}`}>
            <button className="button2">Edit Review</button>
          </Link>
          <button onClick={handleClick} className="button2">
            Delete
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </li>
  );
};

export default ReviewItem;
