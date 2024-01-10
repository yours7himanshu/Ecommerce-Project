import './Hero.css';
import Family from '../Assets/Family.png'



function Hero() {
  return (
    <div className="hero" >
    <div className="hero-left">
      <h1>Elevate Your Wardrobe: Start Your Shopping Journey Here!!</h1>
      <p>Welcome to FlipZone, where fashion meets ease. Elevate your style with curated collections for every moment. Explore the latest trends and timeless classics effortlessly. Shop smart, shop FlipZone. Your journey to impeccable style starts here.</p>
      <div className="buttons">
        <button className='button1' >Explore Now</button>
        <button className='button2' >Order Now</button>
      </div>
    </div>


  <div className="hero-right">
    <img src={Family}/>
  </div>
    </div>
  )
}

export default Hero
