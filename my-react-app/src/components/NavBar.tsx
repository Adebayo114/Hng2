import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is included
import { Link } from 'react-router-dom';
import heartIcon from "../assets/icons/heart.png";
import shoppingIcon from "../assets/icons/shopping-cart.png";
import userIcon from "../assets/icons/user (2).png";
import '../styles/NavBar.css'

function NavBar() {
  return (
    <>
              <div className="nav">
              <h2>Top Sell</h2>
                <div className="search">
                <input type="search" name="" placeholder="   What product are you buying" id="srch" />
            </div>
            <a href=""><div className="s-l">Sign Up /Login</div></a>
            <a href=""><div className="prdct">Products</div></a>
            <div className="nav-icons">
                <div className="nav-icons-kids">
                <Link to="/cart">
                <img src={shoppingIcon} alt="Shopping-icon" />
              </Link>
                    </div>
                <div className="nav-icons-kids"><img src={heartIcon} alt="" /></div>
                <div className="nav-icons-kids"><img src={userIcon} alt="" /></div>
            </div>
            </div>
    </>
  );
}

export default NavBar;
