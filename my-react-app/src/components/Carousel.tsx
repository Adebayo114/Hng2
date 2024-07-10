import firstSlide from "../assets/slide images/slide1.jpeg";
import sectSlide from "../assets/slide images/slide2.jpeg";
import thrtSlide from "../assets/slide images/slide3.jpeg";
import fthSlide from "../assets/slide images/slide4.jpeg";
import fifSlide from "../assets/slide images/slide5.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is included
import '../styles/Carousel.css'

function Carousel() {
    return (
        <div>
            
        {/* Slide Section */}
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={firstSlide} alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={sectSlide} alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={thrtSlide} alt="Third slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={fthSlide} alt="Fourth slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={fifSlide} alt="Fifth slide" />
            </div>
            </div>
        </div>

        <h1 className="f-text">Buy Your Next Laptop</h1>
        </div>
    )
}

export default Carousel
