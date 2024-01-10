import { useEffect, useState } from "react";
import "./CSS/Cart.css";
import axios from "axios";

const Cart = () => {
  const [items, setItems] = useState([]);
  const userId = localStorage.getItem("user");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const cartData = await axios.get(
        `http://localhost:3001/api/v1/c/${userId}`
      );
      setItems(cartData.data.items);
    }
    fetchData();
  }, [setItems, userId]);
  const handleRemove = async (productId) => {
    const answer = prompt("Do you want to remove this item from the cart?");
    if (answer === "yes") {
      alert("Item removed from cart successfully");
      await axios.delete(
        `http://localhost:3001/api/v1/c/${userId}/remove/${productId}`
      );
      const newItems = items.filter((item) => item.productId._id !== productId);
      setItems(newItems);
    } else {
      alert("Item not removed from cart");
    }
  };
  const handleCount = (e) => {
    if (count === 0 && e === "-") {
      return;
    }
    if (e === "+") {
      setCount(count + 1);
    } else if (e === "-") {
      setCount(count - 1);
    }
  };
  const handleCheckout = async () => {
    const answer = prompt("Do you confirm to checkout?");
    if (answer === "yes") {
      try {
        await Promise.all(
          items.map(async (item) => {
            await axios.delete(
              `http://localhost:3001/api/v1/c/${userId}/remove/${item.productId._id}`
            );
          })
        );
        alert("Checkout successfully");
        setItems([]);
      } catch (error) {
        console.error("Error during checkout:", error);
        alert("Checkout not successful");
      }
    } else {
      alert("Checkout not successful");
    }
  };

  return (
    <div className="cart">
      {items.length === 0 ? (
        <div className="empty-cart-message">No items in the cart</div>
      ) : (
        <>
          {items.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="item">
                <img
                  src={item.productId.image}
                  width={50}
                  alt={item.productId.name}
                />
              </div>
              <div className="item">{item.productId.name}</div>
              <div className="item-quantity">
                <button
                  className="btn-minus-btn"
                  onClick={(e) => handleCount(e.target.value)}
                  value={"+"}
                >
                  +
                </button>
                <span>{item.productId.quantity + count}</span>
                <button
                  className="btn-plus-btn"
                  onClick={(e) => handleCount(e.target.value)}
                  value={"-"}
                >
                  -
                </button>
              </div>
              <div className="new_price">
                ${item.productId.price * item.quantity}
              </div>
              <button
                className="Removebtn"
                onClick={() => handleRemove(item.productId._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="total">
            <span>
              Total: $
              {items.reduce(
                (a, b) => a + b.productId.price * (b.quantity + count),
                0
              )}
            </span>
          </div>
          <button
            className="Removebtn"
            style={{ backgroundColor: "blue" }}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
