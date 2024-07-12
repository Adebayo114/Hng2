import pc1 from '../assets/pcs/pc01.jpeg'
import pc5 from '../assets/pcs/pro 16.jpeg'
import pc2 from '../assets/pcs/samsung book3.jpeg'
import pc3 from '../assets/pcs/dell 3420-14.jpeg'
import pc4 from '../assets/pcs/hp end.jpeg'
import heart from '../assets/icons/heart (2).png'
import '../styles/Cart.css';
import plus from '../assets/icons/plus.png'
import minus from '../assets/icons/minus (1).png'
import { Link } from 'react-router-dom'
import ts from '../assets/pcs/topsell.png'
import googleplay from '../assets/pcs/gp.jpeg'
import apple from '../assets/pcs/ap.jpeg'
import image from '../assets/pcs/dell 7490.jpeg'
import trck from '../assets/icons/cargo-truck (2).png'
import car from '../assets/icons/car (1).png'
import box from '../assets/icons/box (1).png'

function Cart() {
  return (
    <>
     <h2 className='ht'>Shopping Cart (1 Item)</h2>
      <div className="container">
        
        <div className="shopping-cart">
            <div className="shopping-cart-item">
                <img src={image} alt="Apple MacBook Air"/>
                <div>
                    <h3>Apple MacBook Air 13"</h3>
                    <p>256GB SSD 8-Core CPU</p>
                    <p className='dealer'>Top Sell Dealer</p>
                        <select name="" id="option">
                            <option value="">Color</option>
                            <option value="">Red</option>
                            <option value="">Blue</option>
                        </select>
                </div>
                <p>$1,656.00</p>
                <div className="counter-container">
        <img src={plus} alt="" id="decrement"/>
        <span id="counter">0</span>
        <img src={minus} alt="" id="increment" />
    </div>
            </div>
            <img src={heart} alt="" />
            <button>Remove</button>

        </div>

        <div className="summary">
    <h2 className='ap'>Summary</h2>
    <div className="sum-head">
        <div className="sum-kids">
            <p>Subtotal:</p>
            <p>Shipping fee:</p>
            <p>Taxes:</p>
        </div>

        <div className="sum-kid2">
                <p>$1,656.00</p>
                <p>$10.50</p>
                <p>$0.00</p>
        </div>
    </div>

    <div className="tt">
        <p className="total">Total: </p>
        <div className="t2">$1,666.50</div>
    </div>
        <Link to="/CheckOut">
            <button className='btn2'>Proceed to checkout</button>
        </Link>

    <p className="return-policy">Free 30-day return with ease</p>
</div>


        </div>
        
        <div className="shipping-options">
            <h2 className='so'>Shipping Options</h2>
            <div className="options">
                <div className='options-sec'>
                    <img src={trck} alt="" />
                    <p>Shipping Available</p>
                    <p className='alble'>Available</p>
                    </div>
                <div className='options-sec'>
                    <img src={car} alt="" />
                    <p>Pickup Available</p>
                    <p className='alble'>Available</p>
                    </div>
                <div className='options-sec'>
                    <img src={box} alt="" />
                    <p>Delivery Available</p>
                    <p className='alble'>Available</p>
                </div>
            </div>
            
        </div>

        <div className="deal-contents">
            <div className="deal-contents-items">
                <img id='hot-deals' src={pc1}  alt="" />
                <img id='heart' src={heart} alt="" />
                <p className='content-text'>Dell Latitude 3420-14'
                <p>Gen Intel Core i5</p>
                </p>
                <p className='price'>$659</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc5} alt="" />
                <img id='heart1' src={heart} alt="l" />
                <p className='content-text'>Apple MacBook Pro 16'
                <p>1TB - 10 Cores M1 Max</p>
                </p>
                <p className='price'>$3,670</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc2} alt="" />
                <img id='heart2' src={heart} alt="" />
                <p className='content-text'>Samsung Gallery Book 3 Pro
                <p>Gen Intel Core i5</p>
                </p>
                
                <p className='price'>$943</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc3} alt="" />
                <img id='heart3' src={heart} alt="" />
                <p className='content-text'>Dell Latitude 3420-14'
                <p>Gen Intel Core i5</p>
                </p>
                <p className='price'>$732</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc4} alt="" />
                <img id='heart4' src={heart} alt="" />
                <p className='content-text'>Hp Latitude 3420-14'
                <p>Gen Intel Core i5</p>
                </p>
                <p className='price'>$690</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>


        </div>

        <div className="advert">
            <div className="fone-logo">
                <img src={ts} alt="" />
            </div>


            <div className="advert-details">
                <h2>Get more on our app</h2>
                <p>Unlock exclusive features save serches,track inquiries mpore with our app <p>
                    Available on IOS and Android</p></p>
                    <div className="download-option">
                        <div className="apple-version">
                            <img id='apple' src={apple} alt="" />
                        </div>


                        <div className="ios-version">
                            <img id='google' src={googleplay} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Cart