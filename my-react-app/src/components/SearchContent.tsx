import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import searchIcon from '../assets/icons/search.png'
import '../styles/Carousel.css'

function SearchContent() {
    return (
        <div className="content-page">
                <div className="content-nav">
                    <a href=""><div className="content-nav-kids">Macbook</div></a>
                    <a href=""><div className="content-nav-kids">Dell</div></a>
                    <a href=""><div className="content-nav-kids">Lenovo</div></a>
                    <a href=""><div className="content-nav-kids">Samsung</div></a>
                    <a href=""><div className="content-nav-kids">Asus</div></a>
                    <a href=""><div className="content-nav-kids">Hp</div></a>
                    <a href=""><div className="content-nav-kids">Toshiba</div></a>
                </div>
                <hr />
                <div className="srch-form">
                    <div className="srch-kid">
                    <img id='s-image' src={searchIcon} alt="" />
                    <input type="search" name="" id="srch" placeholder='What product are you buying' />
                    </div>
                    <div className="srch-btn">Search</div>
                </div>
        </div>
    );
}

export default SearchContent;
