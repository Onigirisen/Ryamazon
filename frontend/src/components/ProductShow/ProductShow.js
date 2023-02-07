import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import { fetchCart } from "../../store/cart";
import { fetchProduct, getProduct } from "../../store/product";
import { fetchReviews, getReviews } from "../../store/review";
import { addItemToCart } from "../../store/cart";
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReviewsIndex from "../ReviewsIndex/ReviewsIndex";

const ProductShow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [qty, setQty] = useState(1);
  const { productId } = useParams();
  const userId = useSelector((state) => state.session.user?.id);
  const product = useSelector(getProduct(productId)) || {};
  const reviews = useSelector(getReviews);
  const reviewsListItem = <ReviewsIndex reviews={reviews} product={product} />;
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

  useEffect(() => {
    if (productId) dispatch(fetchProduct(productId));
    if (productId) dispatch(fetchReviews(productId));
  }, [productId, dispatch]);

  const freeDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 6);
    return deliveryDate.toDateString().slice(0, 10);
  };

  const fastestDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    return deliveryDate.toDateString().slice(0, 10);
  };

  const orderBeforeTime = () => {
    const today = new Date();
    const time = `${23 - today.getHours()} hrs and ${
      59 - today.getMinutes()
    } mins.`;
    return time;
  };

  const returnableDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 60);
    return deliveryDate.toDateString().slice(0, 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      dispatch(addItemToCart(userId, productId, qty));
      history.push("/cart");
    } else {
      history.push("/login");
    }
    setQty(1);
  };

  return (
    <div className="product-show-container">
      <div className="product-show-information">
        <div className="product-photo-container">
          <img src={product.photoURL} alt="" />
        </div>
        <div className="product-mid-section">
          <h1>{product.name}</h1>
          <hr />
          <div className="show-product-rating">
            <div className="stars">{ratingStars(product?.averageRating)}</div>
            <div className="show-product-ratings">
              {product?.countOfReviews} ratings
            </div>
          </div>
          <div className="product-price-container">
            <div className="product-price-name">Price:</div>
            <div className="product-price">${product.price}</div>
          </div>
          <hr />
          <div className="product-description-container">
            <h2>About this item</h2>
            <div className="product-description">{product.description}</div>
          </div>
        </div>
        <div className="product-ordering-container">
          <div className="product-ordering-inner">
            <div className="product-price-inner">${product.price}</div>
            <div className="free-delivery">
              <span className="free-delivery-text">FREE Delivery</span>
              <span className="free-delivery-date">{freeDeliveryDate()}</span>
            </div>
            <div className="fastest-delivery">
              <span className="fastest-delivery-text">
                {" "}
                Or fastest delivery
              </span>
              <span className="fastest-delivery-date">
                {fastestDeliveryDate()}.
              </span>
              <span className="fastest-delivery-orderwithin">Order within</span>
              <span className="fastest-delivery-time">{orderBeforeTime()}</span>
            </div>
            <div className="in-stock">In Stock.</div>
            <div className="product-order-form">
              <form onSubmit={handleSubmit}>
                <div className="select-wrap">
                  <label>
                    Qty:
                    <select
                      className="qty"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </label>
                </div>
                <div className="ordering-button-container">
                  <input
                    type="submit"
                    className="add-cart-button"
                    value="Add to Cart"
                  />
                </div>
              </form>
            </div>
            <div className="ordering-button-container">
              <Link to="/cart/checkout">
                <button className="buy-now-button">Buy Now</button>
              </Link>
            </div>
            <div className="secure-transaction">
              <i className="fa-solid fa-lock"></i>
              <span>Secure transaction</span>
            </div>
            <div className="ships-from-container">
              <div className="ships-from-text">Ships from</div>
              <div className="ryamazon">Ryamazon.com</div>
            </div>
            <div className="sold-by-container">
              <div className="sold-by-text">Sold by</div>
              <div className="ryamazon">Ryamazon.com</div>
            </div>
            <div className="return-policy-container">
              <span className="return-policy">Return policy:</span>
              <span className="returnable-date">
                Returnable until {returnableDate()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-section">{reviewsListItem}</div>
    </div>
  );
};

export default ProductShow;
