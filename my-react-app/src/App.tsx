import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import SearchContent from './components/SearchContent';
import Contents from './components/Contents';
import Footer from './components/Footer';
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
          <Route path="/" element={<>
            <Carousel />
            <SearchContent />
            <Contents />
            <Footer />
          </>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
