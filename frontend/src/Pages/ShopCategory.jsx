import { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import all_product from "../Components/Assets/all_product";
import Cards from "../Components/Cards/Cards";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shop-banner">
        <img className="banner" src={props.banner} alt="order" />
      </div>

      <div className="indexSort">
        <p>
          <span>Showing1-12</span> out of 36 products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category == item.category) {
            return (
              <Cards
                className="cards"
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
