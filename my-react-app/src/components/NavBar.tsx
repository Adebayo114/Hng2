import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is included
import { Link } from 'react-router-dom';
import heartIcon from "../assets/icons/heart.png";
import shoppingIcon from "../assets/icons/shopping-cart.png";
import userIcon from "../assets/icons/user (2).png";
import menuIcon from "../assets/icons/134216_menu_lines_hamburger_icon.png"; // Add your menu icon
import searchIcon from "../assets/icons/search.png"; // Add your search icon
import '../styles/NavBar.css';

function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <img src={menuIcon} alt="Menu-icon" className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
        <h2>Top Sell</h2>
        <div className="search"    onClick={() => setSearchOpen(true)}>
        <img src={searchIcon} alt="" /> <input type="search" name="" placeholder="   What product are you buying" id="srch" />
            </div>

      
        <a href="" className="prdct">Sign Up/Login</a>
        <a href="" className="prdct">Products</a>
        <div className="nav-icons">
          <div className="nav-icons-kids">
          <Link to="/cart">
                <img src={shoppingIcon} alt="Shopping-icon" />
              </Link>
          </div>
          <div className="nav-icons-kids">
            <img src={heartIcon} alt="Heart-icon" />
          </div>
          <div className="nav-icons-kids">
            <img src={userIcon} alt="User-icon" />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="menu-dropdown" onClick={(e) => e.stopPropagation()}>
          <Link to="/">
        <a href="" className='menu-item'>Home</a>
        </Link>
            <a href=""><div className="menu-item">Sign Up/Login</div></a>
            <a href=""><div className="menu-item">Products</div></a>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <input type="search" placeholder="What product are you buying?" autoFocus />
            <button onClick={() => setSearchOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
