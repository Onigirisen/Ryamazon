import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const ProductItem = ({
  product: { id, name, price, photoURL, averageRating, countOfReviews },
}) => {
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

  return (
    <div className="product-container">
      <Link className="product-page-link" to={`/products/${id}`}>
        <div className="product-information">
          <img src={photoURL} alt="" />
          <p className="product-name">{name}</p>
          <div className="product-rating-container">
            <span className="product-rating">{ratingStars(averageRating)}</span>
            <span className="product-review-count">{countOfReviews}</span>
          </div>
          <p className="price">
            <small>$</small>
            <strong>{price.toFixed(2)}</strong>
          </p>
          <div className="tomorrow-shipping">
            <span className="shipping-text">Get it as soon as Tomorrow</span>
            <span className="shipping-text">FREE Shipping by Ryamazon</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
