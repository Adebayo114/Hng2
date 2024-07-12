
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import SearchContent from './components/SearchContent';
import Contents from './components/Contents';
import CheckOut from './components/CheckOut';
import Footer from './components/Footer';
import Final from './components/Final';
import CheckOut2 from './components/CheckOut2';
import Cart from './components/Cart'; // Import your Cart component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/Fonts.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
            <Carousel />
            <SearchContent />
            <Contents />
          </>
        } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />}/>
          <Route path="/checkout2" element={<CheckOut2 />}/>
          <Route path="/final" element={<Final />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
