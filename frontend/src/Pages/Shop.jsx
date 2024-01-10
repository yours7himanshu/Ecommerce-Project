import Hero from "../Components/Hero/Hero";
import "./Shop.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Shop() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {

    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const user = jwtDecode(token);
        if (!user) {
          // Token is invalid or expired
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      } catch (error) {
        // An error occurred while decoding the token
        console.error("Error decoding token:", error);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    } else {
      // No token found, navigate to login
      navigate("/login");
    }
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, [navigate]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:3001/api/v1/p/products"
      );
      console.log(response.data);
      setProducts(response.data);
    }
    fetchData();
  }, []);
 
  return (
    <div>
      <Hero />
      <div
        className="choosingUs"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1>Why Choosing Us??</h1>
        <p>
          We prioritize customer satisfaction, offering a seamless and secure
          shopping environment. With user-friendly navigation, quick delivery,
          and a hassle-free return policy, we make shopping with us a delight.
          What sets us apart is not just the products we offer, but the entire
          experience – a fusion of fashion expertise and customer-centric
          service. Trust FlipZone to elevate your style journey.Have a Good
          Day!!{" "}
        </p>
      </div>
      <Popular products={products.slice(15, 19)} className="popular" />
      <Offers className="offers" />
      <NewCollections
        products={products.slice(5, 13)}
        className="new-collection"
      />
      <NewsLetter />
    </div>
  );
}

export default Shop;
