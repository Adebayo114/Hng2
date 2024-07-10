import twitter from '../assets/icons///twitter (2).png'
import apple from '..//assets//icons/apple-logo.png'
import facebook from '..//assets//icons/facebook-logo (1).png'
import insta from '../assets/icons/instagram (1).png'
import youtube from '../assets/icons/youtube.png'
import '../styles/NavBar.css'
function Footer() {
  return (
    <div>

        <div className="footer">
          <div className="footr-nav">
            <a href="#"><div className="footer-nav">Home</div></a>
            <a href="#"><div className="footer-nav">Blog</div></a>
            <a href="#"><div className="footer-nav">About</div></a>
            <a href="#"><div className="footer-nav">Contact Us</div></a>
          </div>

          <h3 className='ts'>Top Sell</h3>

          <div className="footer-icons">
            <div className="footer-icons-img">
                <img src={twitter} alt="twitter" />
            </div>

            <div className="footer-icons-img">
                <img src={apple} alt="apple" />
            </div>

            <div className="footer-icons-img">
                <img src={facebook} alt="facebook" />
            </div>

            <div className="footer-icons-img">
                <img src={insta} alt="insta" />
            </div>

            <div className="footer-icons-img">
                <img src={youtube} alt="youtube" />
            </div>

          </div>
        </div>

    </div>
  )
}

export default Footer