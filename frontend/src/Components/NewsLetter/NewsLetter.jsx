import "./NewsLetter.css"
function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on your Email!!</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="input">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
