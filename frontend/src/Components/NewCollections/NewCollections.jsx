import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import axios from "axios";

// /api/v1/p/products
function NewCollections({ products }) {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {/* {new_collection.map((item, i) => {
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

export default NewCollections;
