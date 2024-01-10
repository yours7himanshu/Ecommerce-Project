// ghost rider whats to hear your voice and deeply

import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";

import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import axios from "axios";

function Product() {
  // const {all_product}= useContext(ShopContext);
  const { productId } = useParams();
  // const product = all_product.find((e)=>e.id=== Number(productId))
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3001/api/v1/p/products/${productId}`
      );
      console.log(response.data);
      setProduct(response.data);
    }
    fetchData();
  }, [productId]);
  function handleAddToCart(cartData) {
    console.log(cartData);
    // console.log(cart)

    // const existingItemIndex = cart.findIndex((item) => item.product === cartData.product)

    // if (existingItemIndex === -1) {
    //     setCart((prevData) => [...prevData, { ...cartData, quantity: 1, addToCart: true }])
    // }

    // setCart((prevData) => {
    //     // prevData.add
    //     return [...prevData, {...cartData,quantity:1,addToCart:true}]
    // })
  }
  return (
    <div>
      <ProductDisplay product={product} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Product;
