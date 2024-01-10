/* eslint-disable react/prop-types */
// ProductDisplay.jsx
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import { useEffect, useState } from "react";

const ProductDisplay = ({ product }) => {

  async function handleAddItemToCart(product) {
    const defaultQuantity = 1;
    const userId = localStorage.getItem("user");
    const response = await fetch(
      `http://localhost:3001/api/v1/c/${userId}/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: defaultQuantity,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    alert("Item added to cart");
  }
  if (!product) {
    return <p>No product data available.</p>;
  }
  // console.log(product)
  return (
    <>
      <div className="productdisplay">
        <div className="product-left">
          <div className="productdisplay-img-left">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className="product-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="right-prices">
            <div className="prices">
              <div className="right-prices-new">${product.price}</div>
            </div>

            <div className="right-discription">{product.description}</div>
            <div className="right-size">
              <h1>Select Size</h1>
              <div className="product-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button
              // onClick={() => handleAddToCart(product)}
              onClick={() => handleAddItemToCart(product)}
              // onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>

            <p className="productdisplay-right-category">
              <span>Tags:</span>Modern, Latest,Crop Top
            </p>
          </div>
        </div>
      </div>
      {/* {showCart && <Cart cartArr={cartArr} handleChange={handleChange} />} */}
    </>
  );
};

export default ProductDisplay;
