import React from 'react';
import { useCart } from '../Contexxt/CartContent'
import messager from '../assets/icons/messenger .png'
import pc1 from '../assets/pcs/pc01.jpeg';
import pc5 from '../assets/pcs/pro 16.jpeg'
import pc2 from '../assets/pcs/samsung book3.jpeg'
import ts from '../assets/pcs/topsell.png';
import pc3 from '../assets/pcs/dell 3420-14.jpeg'
import pc4 from '../assets/pcs/hp end.jpeg'
import heart from '../assets/icons/heart.png';
import pc6 from '../assets/pcs/pro 14.jpeg'
import pc7 from '../assets/pcs/Air 13.jpeg'
import pc8 from '../assets/pcs/pro 16.2.jpeg'
import pc9 from '../assets/pcs/dell 7370.jpeg'
import pc10 from '../assets/pcs/dell 3190.jpeg'
import pc11 from '../assets/pcs/dell 7490.jpeg'
import pc12 from '../assets/pcs/dell m18.jpeg'
import pc13 from '../assets/pcs/dell end.jpeg'
import pc14 from '../assets/pcs/len 1280p1.jpeg'
import pc15 from '../assets/pcs/len intel.jpeg'
import pc16 from '../assets/pcs/len v14.jpeg'
import pc17 from '../assets/pcs/len X1.jpeg'
import googleplay from '../assets/pcs/gp.jpeg';
import apple from '../assets/pcs/ap.jpeg';
import '../styles/Content.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Contents: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <>
      <div className="deal1">
        <h2 className="dtls1">Hot Deals</h2>
        <img id="mess" src={messager} alt="messager" />
      </div>
      <hr />
      <div className='deal-contents'>
        <div className="deal-contents-items">
          <img id="hot-deals" src={pc1} alt="Apple MacBook Pro 16" />
          <img id="heart1" src={heart} alt="favorite" />
          <div className="content-text">
            <p>Dell Latitude 3420-15'</p>
            <p>Gen Intel Core i5</p>
          </div>
          <p className="price">$2500</p>
          <div className="cart-btn">
            <button className="btn" onClick={() => addToCart({ id: 1, image: pc1, name: "Apple MacBook Pro 16'", price: 2500, quantity: 1 })}>ADD TO CART</button>
          </div>
        </div>

        <div className="deal-contents-items">
          <img id="hot-deals" src={pc5} alt="Apple MacBook Pro 16" />
          <img id="heart4" src={heart} alt="favorite" />
          <div className="content-text">
            <p>Apple MacBook Pro 16'</p>
            <p>1TB - 10 Cores M1 Max</p>
          </div>
          <p className="price">$3670</p>
          <div className="cart-btn">
            <button className="btn" onClick={() => addToCart({ id: 5, image: pc5, name: "Apple MacBook Pro 16'", price: 3670, quantity: 1 })}>ADD TO CART</button>
          </div>
        </div>

        <div className="deal-contents-items">
          <img id="hot-deals" src={pc2} alt="Samsung Gallery Book 3 Pro" />
          <img id="heart1" src={heart} alt="favorite" />
          <div className="content-text">
            <p>Samsung Gallery Book 3 Pro</p>
            <p>Gen Intel Core i5</p>
          </div>
          <p className="price">$943</p>
          <div className="cart-btn">
            <button className="btn" onClick={() => addToCart({ id: 2, image: pc2, name: "Samsung Gallery Book 3 Pro", price: 943, quantity: 1 })}>ADD TO CART</button>
          </div>
        </div>

        <div className="deal-contents-items">
          <img id="hot-deals" src={pc3} alt="Dell Latitude 3420-14" />
          <img id="heart2" src={heart} alt="favorite" />
          <div className="content-text">
            <p>Dell Latitude 3420-14'</p>
            <p>Gen Intel Core i5</p>
          </div>
          <p className="price">$732</p>
          <div className="cart-btn">
            <button className="btn" onClick={() => addToCart({ id: 3, image: pc3, name: "Dell Latitude 3420-14'", price: 732, quantity: 1 })}>ADD TO CART</button>
          </div>
        </div>

        <div className="deal-contents-items">
          <img id="hot-deals" src={pc4} alt="Hp Latitude 3420-14" />
          <img id="heart3" src={heart} alt="favorite" />
          <div className="content-text">
            <p>Hp Latitude 3420-14'</p>
            <p>Gen Intel Core i5</p>
          </div>
          <p className="price">$680</p>
          <div className="cart-btn">
            <button className="btn" onClick={() => addToCart({ id: 4, image: pc4, name: "Hp Latitude 3420-14'", price: 680, quantity: 1 })}>ADD TO CART</button>
          </div>
        </div>


      </div>

      {/* Additional sections for Mac, Dell, and Lenovo laptops can be added here in the same pattern */}

{/* MACBOOK */}

<h2 className="dtls">Macbook Laptops</h2>
            <hr />

            <div className="deal-contents">
                <div className="deal-contents-items">
                <img id="hot-deals" src={pc6} alt="" />
                <img id="heart" src={heart} alt="" />
                <div className="content-text">
                    <p>Apple MacBook Pro 14"</p>
                    <p>18GB-14-core GPU-512 SSD</p>
                </div>
                <p className="price">$1943</p>

                <div className="cart-btn">
                <button className="btn" onClick={() => addToCart({ id: 1, image: pc6, name: "Apple MacBook Pro 14'", price: 1943, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                  <img id="hot-deals" src={pc5} alt="" />
                  <img id="heart1" src={heart} alt="l" />
                <div className="content-text">
                    <p>Apple MacBook Pro 16'</p>
                    <p>1TB - 10 Cores M1 Max</p>
                </div>
                <p className="price">$3,670</p>

                <div className="cart-btn">
                <button className="btn" onClick={() => addToCart({ id: 1, image: pc5, name: "Apple MacBook Pro 16'", price: 3670, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                  <img id="hot-deals" src={pc7} alt="" />
                  <img id="heart2" src={heart} alt="" />
                <div className="content-text">
                    <p>Apple MacBook Air 13'</p>
                    <p>256GB SSD/ 8-Core GPU</p>
                </div>
                <p className="price">$1,656</p>

                <div className="cart-btn">
                  <button className="btn" onClick={() => addToCart({ id: 1, image: pc7, name: "Apple MacBook Pro 13'", price: 1656, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                  <img id="hot-deals" src={pc8} alt="" />
                  <img id="heart3" src={heart} alt="" />
                <div className="content-text">
                    <p>Apple MacBook Pro 16.2"</p>
                    <p>1TB - 10 Cores - M1 Max</p>
                </div>
                <p className="price">$3,732</p>

                <div className="cart-btn">
                  <button className="btn" onClick={() => addToCart({ id: 1, image: pc8, name: "Apple MacBook Pro 16.2'", price: 3732, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                  <img id="hot-deals" src={pc1} alt="" />
                  <img id="heart4" src={heart} alt="" />
                <div className="content-text">
                <p>Apple MacBook Pro 16'</p>
                <p>1TB - 10 Cores M1 Max</p>
                </div>
                <p className="price">$659</p>

                <div className="cart-btn">
                  <button className="btn" onClick={() => addToCart({ id: 1, image: pc6, name: "Apple MacBook Pro 14'", price: 1943, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>
            </div>


          {/* FOR DELL */}
          <h2 className="dtls">Dell Laptops</h2>
            <hr />
            <div className="deal-contents">
                <div className="deal-contents-items">
                <img id="hot-deals" src={pc9} alt="" />
                <img id="heart" src={heart} alt="" />
                <div className="content-text">
                    <p>DELL Latitude 7370</p>
                    <p>Intel Core 15 8GB RAM, SSD</p>
                </div>
                <p className="price">$543</p>

                <div className="cart-btn">
                <button className="btn" onClick={() => addToCart({ id: 1, image: pc9, name: "DELL Latitude 7370", price: 543, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                <img id="hot-deals" src={pc10} alt="" />
                <img id="heart1" src={heart} alt="l" />
                <div className="content-text">
                    <p>DELL LATITUDE 3190 2in1 X360</p>
                    <p>8GB RAM, 128GB SSD</p>
                </div>
                <p className="price">$370</p>

                <div className="cart-btn">
                <button className="btn" onClick={() => addToCart({ id: 1, image: pc10, name: "DELL LATITUDE 3190 2in1 X360", price: 370, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                <img id="hot-deals" src={pc11} alt="" />
                <img id="heart2" src={heart} alt="" />
                <div className="content-text">
                    <p>DELL Latitude 7490 TOUCH</p>
                    <p>1TB SSD/16GB RAM</p>
                </div>
                <p className="price">$1,156</p>

                <div className="cart-btn">
                <button className="btn" onClick={() => addToCart({ id: 1, image: pc11, name: "DELL Latitude 7490 TOUCH", price: 1156, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                <img id="hot-deals" src={pc12} alt="" />
                <img id="heart3" src={heart} alt="" />
                <div className="content-text">
                    <p>DELL Alienware M18 R1</p>
                    <p>4TB/64GB 19 13th Gen</p>
                </div>
                <p className="price">$5,932</p>

                <div className="cart-btn">
                <button className="btn" onClick={() => addToCart({ id: 1, image: pc12, name: "DELL Alienware M18 R1", price: 5932, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                <img id="hot-deals" src={pc13} alt="" />
                <img id="heart4" src={heart} alt="" />
                <div className="content-text">
                    <p>Dell Latitude 3420-14'</p>
                    <p>Gen Intel Core i5</p>
                </div>
                <p className="price">$659</p>

                <div className="cart-btn">
                <button className="btn" onClick={() => addToCart({ id: 1, image: pc13, name: "Dell Latitude 3420-14'", price: 659, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>
            </div>


{/* for Lenovo */}
          <h2 className="dtls">Lenovo Laptops</h2>
            <hr />
            <div className="deal-contents">
                <div className="deal-contents-items">
                <img id="hot-deals" src={pc14} alt="" />
                <img id="heart" src={heart} alt="" />
                <div className="content-text">
                    <p>Lenovo ThinkPad P16s G1</p>
                    <p>i7-1280P 1.80 GHz</p>
                </div>
                <p className="price">$1,543</p>

                <div className="cart-btn">
                    <button className="btn" onClick={() => addToCart({ id: 1, image: pc14, name: "Lenovo ThinkPad P16s G1", price: 1543, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                <img id="hot-deals" src={pc15} alt="" />
                <img id="heart1" src={heart} alt="l" />
                <div className="content-text">
                    <p>Lenovo Ideapad Intel</p>
                    <p>256 SSD 4GB RAM</p>
                </div>
                <p className="price">$1,170</p>

                <div className="cart-btn">
                    <button className="btn" onClick={() => addToCart({ id: 1, image: pc15, name: "Lenovo Ideapad Intel", price: 659, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                <img id="hot-deals" src={pc16} alt="" />
                <img id="heart2" src={heart} alt="" />
                <div className="content-text">
                    <p>Lenovo V14 AMD RYZEN</p>
                    <p>12GB RAM 1TB HDD</p>
                </div>
                <p className="price">$966</p>

                <div className="cart-btn">
                    <button className="btn" onClick={() => addToCart({ id: 1, image: pc16, name: "Lenovo V14 AMD RYZEN", price: 966, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                <img id="hot-deals" src={pc17} alt="" />
                <img id="heart3" src={heart} alt="" />
                <div className="content-text">
                    <p>Lenovo Thinkpad X1</p>
                    <p>Gen 11 Core 17-1365u</p>
                </div>
                <p className="price">$5,932</p>

                <div className="cart-btn">
                    <button className="btn" onClick={() => addToCart({ id: 1, image: pc17, name: "Lenovo Thinkpad X1", price: 5932, quantity: 1 })}>ADD TO CART</button>
                </div>
                </div>

                <div className="deal-contents-items">
                <img id="hot-deals" src={pc13} alt="" />
                <img id="heart4" src={heart} alt="" />
                <div className="content-text">
                    <p>Dell Latitude 3420-14'</p>
                    <p>Gen Intel Core i5</p>
                </div>
                <p className="price">$659</p>

                <div className="cart-btn">
                    <button className="btn" onClick={() => addToCart({ id: 1, image: pc13, name: "Dell Latitude 3420-14'", price: 659, quantity: 1 })}>ADD TO CART</button>
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

export default Contents;
