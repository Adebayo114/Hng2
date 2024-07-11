import messager from '../assets/icons/messenger .png'
import '../styles/Content.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pc1 from '../assets/pcs/pc01.jpeg'
import pc5 from '../assets/pcs/pro 16.jpeg'
import pc2 from '../assets/pcs/samsung book3.jpeg'
import ts from '../assets/pcs/topsell.png'
import pc3 from '../assets/pcs/dell 3420-14.jpeg'
import pc4 from '../assets/pcs/hp end.jpeg'
import heart from '../assets/icons/heart (2).png'
import googleplay from '../assets/pcs/gp.jpeg'
import apple from '../assets/pcs/ap.jpeg'


function Contents() {
    return (
        <div>
            <div className="deal1">
                <h2 className='dtls1'>Hot Deals</h2>
                <img id='mess' src={messager} alt="messager" />

            </div>

        <hr />
        {/* cart part */}
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
                <img id='hot-deals' src={pc2} alt="" />
                <img id='heart1' src={heart} alt="l" />
                <p className='content-text'>Apple MacBook Pro 16'
                <p>1TB - 10 Cores M1 Max</p>
                </p>
                <p className='price'>$659</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc3} alt="" />
                <img id='heart2' src={heart} alt="" />
                <p className='content-text'>Samsung Gallery Book 3 Pro
                <p>Gen Intel Core i5</p>
                </p>
                
                <p className='price'>$659</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc4} alt="" />
                <img id='heart3' src={heart} alt="" />
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
                <img id='heart4' src={heart} alt="" />
                <p className='content-text'>Hp Latitude 3420-14'
                <p>Gen Intel Core i5</p>
                </p>
                <p className='price'>$659</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

        </div>


{/* FOR MAC */}
<h2 className='dtls'>Macbook Laptops</h2>
        <hr />

        <div className="deal-contents">
            <div className="deal-contents-items">
                <img id='hot-deals' src={pc1}  alt="" />
                <img id='heart' src={heart} alt="" />
                <p className='content-text'>Apple MacBook Pro 14"
                <p>Apple MacBook Pro 14"</p>
                </p>
                <p className='price'>$1,943</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc2} alt="" />
                <img id='heart1' src={heart} alt="l" />
                <p className='content-text'>Apple Macbook Pro 16'
                <p>1TB-10 Cores M1 Max</p>
                </p>
                <p className='price'>$3,670</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc3} alt="" />
                <img id='heart2' src={heart} alt="" />
                <p className='content-text'>Apple MacBook Air 13' 
                <p>256GB SSD/ 8-Core GPU</p>
                </p>
                
                <p className='price'>$1,656</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc4} alt="" />
                <img id='heart3' src={heart} alt="" />
                <p className='content-text'>Apple MacBook Pro 16.2"
                <p>1TB-10 Cores - M1 Max</p>
                </p>
                <p className='price'>$3,732</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc5} alt="" />
                <img id='heart4' src={heart} alt="" />
                <p className='content-text'>Dell Latitude 3420-14'
                <p>Gen Intel Core i5</p>
                </p>
                <p className='price'>$659</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

        </div> 


{/* FOR DELL */}
        <h2 className='dtls'>Dell Laptops</h2>
        <hr />
<div className="deal-contents">
            <div className="deal-contents-items">
                <img id='hot-deals' src={pc1}  alt="" />
                <img id='heart' src={heart} alt="" />
                <p className='content-text'>DELL Latitude 7370
                <p>Intel Core 15 8GB RAM, SSD</p>
                </p>
                <p className='price'>$543</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc2} alt="" />
                <img id='heart1' src={heart} alt="l" />
                <p className='content-text'>DELL LATITUDE 3190 2in1 X360
                <p>8GB RAM, 128GB SSD</p>
                </p>
                <p className='price'>$370</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc3} alt="" />
                <img id='heart2' src={heart} alt="" />
                <p className='content-text'>DELL Latitude 7490 TOUCH 1
                <p>TB SSD/16GB RAM</p>
                </p>
                
                <p className='price'>$1,156</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc4} alt="" />
                <img id='heart3' src={heart} alt="" />
                <p className='content-text'>DELL Alienware M18 R1
                <p>4TB/64GB 19 13th Gen</p>
                </p>
                <p className='price'>$5,932</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc5} alt="" />
                <img id='heart4' src={heart} alt="" />
                <p className='content-text'>Dell Latitude 3420-14'
                <p>Gen Intel Core i5</p>
                </p>
                <p className='price'>$659</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

        </div>


       {/* for Lenovo */}
        <h2 className='dtls'>Lenovo Laptops</h2>
        <hr />
        <div className="deal-contents">
            <div className="deal-contents-items">
                <img id='hot-deals' src={pc1}  alt="" />
                <img id='heart' src={heart} alt="" />
                <p className='content-text'>Lenovo ThinkPad P16s G1
                <p>i7-1280P 1.80 GHz</p>
                </p>
                <p className='price'>$1,543</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc2} alt="" />
                <img id='heart1' src={heart} alt="l" />
                <p className='content-text'>Lenovo Ideapad Intel 
                <p>256 SSD 4GB RAM</p>
                </p>
                <p className='price'>$$1170</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc3} alt="" />
                <img id='heart2' src={heart} alt="" />
                <p className='content-text'>Lenovo V14 AMD RYZEN
                <p>12GB RAM 1TB HDD</p>
                </p>
                
                <p className='price'>$966</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc4} alt="" />
                <img id='heart3' src={heart} alt="" />
                <p className='content-text'>Lenovo Thinkpad X1 
                <p>Gen 11 Core 17-1365u</p>
                </p>
                <p className='price'>$5,932</p>

                <div className="cart-btn">
                    <button className='btn'>ADD TO CART</button>
                </div>
            </div>

            <div className="deal-contents-items">
                <img id='hot-deals' src={pc5} alt="" />
                <img id='heart4' src={heart} alt="" />
                <p className='content-text'>Dell Latitude 3420-14'
                <p>Gen Intel Core i5</p>
                </p>
                <p className='price'>$659</p>

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



        </div>
    )
    }

export default Contents
