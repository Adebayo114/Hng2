
import one from '../assets/icons/number-1 (1).png'
import three from '../assets/icons/number-3 (1).png'
import cheeck from '../assets/icons/checked.png'
import '../styles/checkout.css'
import ts from '../assets/pcs/topsell.png'
import googleplay from '../assets/pcs/gp.jpeg'
import apple from '../assets/pcs/ap.jpeg'
import '../styles/CheckOut2.css'
import maca from '../assets/pcs/Air 13.jpeg'
import visa from '../assets/icons/visa (1).png'
import apppay from '../assets/icons/apple.png'
import ms from '../assets/icons/card.png'
import { Link } from 'react-router-dom'

function CheckOut2() {
  return (
    <>
    <h2 className='co'>Check Out</h2>
        <hr className='lb' />
        <div className="transfer">
                <div className="trf-sec">
                    <div className="trf-img">
                    <img src={one} alt="" />
                    </div>
                    <p>Shipping Information -------------------</p>
                </div>

                <div className="trf-sec">
                    <div className="trf-img">
                        <img src={cheeck} alt="" /></div>
                    <p className='pt'>Payment Details -------------------</p>
                </div>

                <div className="trf-sec">
                    <div className="trf-img"> <img src={three} alt="" /></div>
                    <p className='pt'>Complete Order -------------------</p>
                </div>
        </div>


        <h2 className='si'>Payment Details</h2>
            <div className="form">
                <div className="form-main">
                    <div className="pm">
                            <div className="pm-sec">
                                <img src={visa} alt="" />
                            </div>
                            <div className="pm-sec">
                                <img src={apppay} alt="" />
                            </div>
                            <div className="pm-sec">
                                <img src={ms} alt="" />
                            </div>
                    </div>

                    <div className="card-name">
                        <div className="form1-sec">
                            <div className="text-f">Card Name</div>
                            <input type="text" name="" id="txt" placeholder='Enter Card Holders Number' />
                        </div>

                    </div>

                    <div className="card-num">
                        <div className="form1-sec">
                                <div className="text-f">Card Number</div>
                                <input type="text" name="" id="txt" placeholder='0000 1111 2222 3333' />
                            </div>
                    </div>

                    <div className="form4">
                        <div className="form2-sec">
                        < div className="text-f">Expiry Date</div>
                            <input type="text" name="" id="cty" placeholder='MM   YY' />
                        </div>

                        <div className="form2-sec">
                            <div className="text-f">CVV</div>
                            <input type="text" name="" placeholder='XXX' id="pro" />
                        </div>

                    </div>

                    <div className="form5">
                        <div className="form3-sec">
                            <div className="text-f">
                                By Clicking "Confirm Payment" I Agree to the Company's <span className='tpp'>Terms and Privacy Policy</span>
                            </div>

                
                            
                        </div>
                    </div>
                    
                    <Link to="/Final">
                    <div className="btn-t"><button className='btn3'>Confirm  Payment</button></div>
                    </Link>

                    <Link to="/Cart">
                        <div className="btn-t"><button className='btn3'>Return to Cart</button></div>
                    </Link>

                </div>

                    

                <div className="side-pay">
                    <h2>Order</h2>
                    <div className="item-box">
                        <img id='maca' src={maca} alt="" />
                        <p>Apple MacBook Air 13'
                            <p> 256GB/8-Core GPU</p>
                            <select name="" id="options">
                                <option value="">Black</option>
                                <option value="">Red</option>
                                <option value="">Blue</option>
                            </select>
                        </p>
                    </div>

                    <div className="summary4">
    <div className="sum-head2">
        <div className="sum-kids1">
            <p>Subtotal:</p>
            <p>Shipping fee:</p>
            <p>Taxes:</p>
        </div>

        <div className="sum-kid3">
                <p>$1,656.00</p>
                <p>$10.50</p>
                <p>$0.00</p>
        </div>
    </div>
        <hr />
    <div className="tt-1">
        <p className="total5">Total: </p>
        <div className="t6">$1,666.50</div>
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

export default CheckOut2