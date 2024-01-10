import "./Popular.css";
import data_product from "../Assets/data";
import Cards from "../Cards/Cards.jsx";

function Popular({ products }) {
  return (
    <div className="popular">
      <h1>POPULAR IN SHIRTS</h1>
      <hr />
      <div className="popular-item">
        {/* {data_product.map((item, i) => {
          return (
            <Cards
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })} */}
        {products.map((item, index) => {
          return (
            <Cards
            className ="card-item"
              key={index}
              _id={item._id}
              name={item.name}
              image={item.image}
              new_price={item.price}
              // old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
