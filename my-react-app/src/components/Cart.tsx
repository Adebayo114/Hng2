
import '../styles/Cart.css';
import image from '../assets/pcs/dell 7490.jpeg'

function Cart() {
  return (
    <>
        <div className="cart-page">





            {/* parent div */}
            <div className="pc-cart">
                    {/* first-details */}
                <div className="pc-dts">

                <div className="pc-img">
                    <img id='imc' src={image} alt="" />
                </div>
                <div className="pcs-dts3">
                    <p>Apple MacBook Air 13'
                        <p>256GB SSD/8-Core GPU</p>
                    </p>
                    <p>Dealer:Top Sell Stories</p>
                    <select name="list" id="list">
                        <option value="list-sec">Color</option>
                        <option value="list-sec">Red</option>
                        <option value="list-sec">Blue</option>
                    </select>
                </div>                    {/* second-dts */}
                    <div className="pc-dts2">
                        <div className="price-dts">567</div>
                        {/* fix the increment/d here */}
                        <div className="incerment"></div>
                    </div>
                </div>



                    {/* third-dts */}
                        <div className="summary">
                        <h3>Summary</h3>
                            <div className="payment-dts">
                                <div className="expenses">
                                    <p className='exp-list'>Subtotal</p>
                                    <p className='exp-list'>Shooping Fee</p>
                                    <p className='exp-list'>Taxes</p>
                                </div>


                                <div className="exp-pay">
                                    <p className='pay-list'>1000</p>
                                    <p className='pay-list'>10</p>
                                    <p className='pay-list'>0000</p>
                                </div>
                        

                            </div>
                            <hr />
                            <div className="total">
                                <div className="tot">Total</div>
                                <div className="tp">1200</div>
                            </div>

                            <div className="pay-btn">
                                Proceed to checkout
                            </div>
                
                            <div className="rtrn">
                                <img src="" alt="" /> Free 30-day return with ease
                            </div> 

                        </div>
                        
            </div>

            






















        </div>
    </>
  )
}

export default Cart