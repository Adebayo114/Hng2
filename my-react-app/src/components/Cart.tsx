import React from 'react';
import truck from '../assets/icons/cargo-truck (2).png'
import car from '../assets/icons/car (1).png'
import pc1 from '../assets/pcs/pc01.jpeg';
import pc5 from '../assets/pcs/pro 16.jpeg'
import pc2 from '../assets/pcs/samsung book3.jpeg'
import pc3 from '../assets/pcs/dell 3420-14.jpeg'
import pc4 from '../assets/pcs/hp end.jpeg'
import heart from '../assets/icons/heart.png';
import box from '../assets/icons/box (1).png'
import { useCart } from '../Contexxt/CartContent'
import minus from '../assets/icons/minus (1).png';
import plus from '../assets/icons/plus.png';
import ts from '../assets/pcs/topsell.png';
import googleplay from '../assets/pcs/gp.jpeg';
import apple from '../assets/pcs/ap.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart: React.FC = () => {
  const { cartItems, incrementQuantity, decrementQuantity } = useCart();

  return (
    <>
      <h2 className='ht'>Shopping Cart ({cartItems.length} Item{cartItems.length > 1 ? 's' : ''})</h2>
      <div className="container">
        <div className="shopping-cart">
          {cartItems.map((item) => (
            <div key={item.id} className="shopping-cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>1TB - 10 Cores M1 Max</p>
                <p className='dealer'>Top Sell Dealer</p>
                <select name="" id="option">
                  <option value="">Black</option>
                  <option value="">Space Grey</option>
                  <option value="">Silver</option>
                </select>
                <p className="price">${item.price}</p>
                <div className="quantity-control">
                  <button id='minus' onClick={() => decrementQuantity(item.id)}>
                    <img src={minus} alt="minus" />
                  </button>
                  <span>{item.quantity}</span>
                  <button id='plus' onClick={() => incrementQuantity(item.id)}>
                    <img src={plus} alt="plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="summary">
    <div className="sum-head">
        <div className="sum-kids">
            <p>Subtotal:</p>
            <p>Shipping fee:</p>
            <p>Taxes:</p>
        </div>

        <div className="sum-kid2">
        {cartItems.map((item) => (
        <p className="price">${item.price}</p>
        )
      )}
                <p>$10.50</p>
                <p>$0.00</p>
        </div>
    </div>
        <hr />
    <div className="tt-1">
    <p className="total-price">Total: </p>
    <p>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
</div>

          <Link to ='/checkout'>
          <div className="checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
          </Link>
<p className="return-policy1">Free 30-day return with ease</p>

        </div>
      </div>


      
      <div className="shipping-options">
            <h2 className='so'>Shipping Options</h2>
            <div className="options">
                <div className='options-sec'>
                    <img src={truck} alt="" />
                    <p>Shipping </p>
                    <p className='alble'>Available</p>
                    </div>
                <div className='options-sec'>
                    <img src={car} alt="" />
                    <p>Pickup </p>
                    <p className='alble'>Available</p>
                    </div>
                <div className='options-sec'>
                    <img src={box} alt="" />
                    <p>Delivery</p>
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
          <img src={ts} alt="Top Sell" />
        </div>
        <div className="advert-details">
          <h2>Get more on our app</h2>
          <p>Unlock exclusive features, save searches, track inquiries, and more with our app.</p>
          <p>Available on iOS and Android</p>
          <div className="download-option">
            <div className="apple-version">
              <img id="apple" src={apple} alt="Apple" />
            </div>
            <div className="ios-version">
              <img id="google" src={googleplay} alt="Google Play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
