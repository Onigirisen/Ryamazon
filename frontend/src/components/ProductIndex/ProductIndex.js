import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../ProductShow";
import {
  getProducts,
  fetchProducts,
  fetchProductsByCategory,
} from "../../store/product";

const ProductIndex = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const allProducts = useSelector(getProducts);
  const productListItem = allProducts.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  useEffect(() => {
    category
      ? dispatch(fetchProductsByCategory(category))
      : dispatch(fetchProducts());
  }, [dispatch, category]);

  const dummyDivs = [1, 2, 3, 4, 5, 6, 7].map((el) => (
    <div className="hidden-product-placeholder" key={el}></div>
  ));
  return (
    <div className="product-index">
      <div className="product-index-container">
        <div className="product-index-layout">
          {productListItem}
          {dummyDivs}
        </div>
      </div>
    </div>
  );
};

export default ProductIndex;
