import "./Cards.css";
import { Link } from "react-router-dom";

function Cards({ image, name, new_price, old_price, _id }) {
  return (
    <div className="card">
      <Link to={`/product/${_id}`} className="image">
        <img src={image} alt="" />
      </Link>

      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new"><span>Price: </span>₹{new_price}</div>
        {/* <div className="item-price-old">₹{old_price}</div> */}
      </div>
    </div>
  );
}

export default Cards;
