import { Link } from "react-router-dom";

const ProductItem = ({ product: { id, name, price, photoURL } }) => {
  return (
    <div className="product-container">
      <Link className="product-page-link" to={`/products/${id}`}>
        <div className="product-information">
          <img src={photoURL} alt="" />
          <p className="product-name">{name}</p>
          <p className="price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          {/* <div className="product-rating">

</div> */}
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
