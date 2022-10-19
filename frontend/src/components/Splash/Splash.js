import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useParams } from "react-router-dom";
import ProductItem from "../ProductShow/";
import {
  getProducts,
  fetchProducts,
  fetchProductsByCategory,
} from "../../store/product";
import backGround from "../../assets/images/background.jpg";

const Splash = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const products = useSelector(getProducts);
  const productListItem = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  console.log(category);
  useEffect(() => {
    category
      ? dispatch(fetchProductsByCategory(category))
      : dispatch(fetchProducts());
  }, [dispatch, category]);

  const dummyDivs = [1, 2, 3, 4, 5, 6, 7].map((el) => (
    <div className="hidden-product-placeholder" key={el}></div>
  ));
  return (
    <div className="splash">
      <div className="splash-container">
        <img className="splash-background" src={backGround} alt="" />
        <div className="splash-layout">
          {productListItem}
          {dummyDivs}
        </div>
      </div>
    </div>
  );
};

export default Splash;
