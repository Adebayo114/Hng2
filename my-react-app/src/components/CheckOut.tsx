
import two from '../assets/icons/two (1).png';
import three from '../assets/icons/number-3 (1).png';
import cheeck from '../assets/icons/checked.png';
import '../styles/checkout.css';
import ts from '../assets/pcs/topsell.png';
import googleplay from '../assets/pcs/gp.jpeg';
import apple from '../assets/pcs/ap.jpeg';
import { Link } from 'react-router-dom';
import { useCart } from '../Contexxt/CartContent'; // Ensure the correct path is used

function CheckOut() {
    const { cartItems} = useCart();

    return (
      <>
        <h2 className='co'>Check Out</h2>
        <hr className='lb' />
        <div className="transfer">
          <div className="trf-sec">
            <div className="trf-img">
              <img src={cheeck} alt="" />
            </div>
            <p>Shipping Information -------------------</p>
          </div>
  
          <div className="trf-sec">
            <div className="trf-img">
              <img src={two} alt="" />
            </div>
            <p className='pt'>Payment Details -------------------</p>
          </div>
  
          <div className="trf-sec">
            <div className="trf-img">
              <img src={three} alt="" />
            </div>
            <p className='pt'>Complete Order -------------------</p>
          </div>
        </div>
  
        <h2 className='si'>Shipping Information</h2>
        <div className="form">
          <div className="form-main">
            <div className="form1">
              <div className="form1-sec">
                <div className="text-f">First Name</div>
                <input type="text" name="" id="name" placeholder='Enter your first name' />
              </div>
              <div className="form1-sec">
                <div className="text-f">Last Name</div>
                <input type="text" name="" id="lname" placeholder='Enter your last name' />
              </div>
            </div>
  
            <div className="form2">
              <div className="form1-sec">
                <div className="text-f">Email</div>
                <input type="email" name="" id="email" placeholder='Enter your email' />
              </div>
              <div className="form1-sec">
                <div className="text-f">Phone Number</div>
                <input type="number" name="" id="pn" placeholder='Enter your phone number' />
              </div>
            </div>
  
            <div className="form3">
              <div className="text-f">Address</div>
              <textarea name="" id="add" cols={50} rows={4} placeholder='Enter your address details'></textarea>
            </div>
  
            <div className="form4">
              <div className="form2-sec">
                <div className="text-f">City</div>
                <input type="text" name="" id="cty" placeholder='City' />
              </div>
              <div className="form2-sec">
                <div className="text-f">State/Province</div>
                <input type="text" name="" id="pro" placeholder='City / Province' />
              </div>
              <div className="form2-sec">
                <div className="text-f">Country</div>
                <input type="text" name="" id="ctry" placeholder='Country' />
              </div>
            </div>
  
            <div className="form5">
              <div className="form3-sec">
                <div className="text-f">Postal Code</div>
                <input type="text" name="" id="pst" placeholder='Zip code' />
              </div>
              <div className="text-g">
                <p><img src={cheeck} alt="" /> I want to have an account with this information</p>
              </div>
            </div>
            <Link to="/CheckOut2">
              <div className="btn-t"><button className='btn3'>Proceed to Payment</button></div>
            </Link>
            <Link to="/Cart">
              <div className="btn-t"><button className='btn3'>Return to Cart</button></div>
            </Link>
          </div>
  
          <div className="side-pay">
            <h2>Order</h2>
            <div className="item-box">
              {cartItems.map((item) => (
                <div key={item.id}>
                  <img id='maca' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>256GB/8-Core GPU</p>
                  <select name="" id="options">
                    <option value="">Black</option>
                    <option value="">Red</option>
                    <option value="">Blue</option>
                  </select>
                </div>
              ))}
            </div>
            <div className="summary4">
              <div className="sum-head2">
                <div className="sum-kids1">
                  <p>Subtotal:</p>
                  <p>Shipping fee:</p>
                  <p>Taxes:</p>
                </div>
                <div className="sum-kid3">
                  {cartItems.map((item) => (
                    <p key={item.id}>${item.price}</p>
                  ))}
                  <p>$10.50</p>
                  <p>$0.00</p>
                </div>
              </div>
              <hr />
              <div className="tt-1">
                <p className="total5">Total: </p>
                <div className="t6">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</div>
              </div>
              <p className="return-policy1">Free 30-day return with ease</p>
            </div>
          </div>
        </div>
  
        <div className="advert">
          <div className="fone-logo">
            <img src={ts} alt="" />
          </div>
          <div className="advert-details">
            <h2>Get more on our app</h2>
            <p>Unlock exclusive features, save searches, track inquiries and more with our app</p>
            <p>Available on iOS and Android</p>
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
    );
  }

export default CheckOut;
