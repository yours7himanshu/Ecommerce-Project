import { useEffect } from "react";
import "./Navbar.css";
import Shopping_Bag from "../Assets/Shopping_Bag.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isActive, setIsActive] = useState("Shop");
  const [isLogin, setIsLogin] = useState(false);
  const [length, setLength] = useState(0);
  const [username, setUsername] = useState("");
  useEffect(() => {
    async function fetchData() {
      const cartData = await axios.get(
        `http://localhost:3001/api/v1/c/${localStorage.getItem("user")}`
      );
      if (cartData.items == []) {
        setLength(0);
      }
      setLength(cartData.data.items.length);
    }
    const loginStatus = localStorage.getItem("isLogin");
    const username = localStorage.getItem("username");
    setIsLogin(loginStatus);
    setUsername(username);
    fetchData();
  }, []);

  async function handleLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    window.location.href = "/login";
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Shopping_Bag} alt="" />
        <p>FlipZone</p>
      </div>
      <ul className="nav-menu">
        {isLogin ? (
          <>
            <li
              onClick={() => {
                setIsActive("Shop");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/shop">
                Shop
              </Link>
              {isActive === "Shop" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setIsActive("mens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/mens">
                Men{" "}
              </Link>{" "}
              {isActive === "mens" ? <hr /> : <></>}{" "}
            </li>
            <li
              onClick={() => {
                setIsActive("womens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/womens">
                Women
              </Link>{" "}
              {isActive === "womens" ? <hr /> : <></>}{" "}
            </li>
            <li
              onClick={() => {
                setIsActive("kids");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/Electronics">
                Kids{" "}
              </Link>{" "}
              {isActive === "kids" ? <hr /> : <></>}{" "}
            </li>
          </>
        ) : null}
      </ul>
      <div className="nav-login-cart">
        {!isLogin ? (
          <Link className="button" to="/login">
            <button>Login</button>
          </Link>
        ) : (
          <>
            <h5>{username}</h5>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
        {isLogin ? (
          <>
            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">{length}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
