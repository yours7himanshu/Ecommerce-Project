import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
    <h1>Exclusive Offers For You!!</h1>
    <div className="para">
    <p>ONLY ON FLIPZONE PRODUCTS</p>
    <button>Check Now</button>
    </div>
 
      </div>
      <div className="offers-right">
      <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
