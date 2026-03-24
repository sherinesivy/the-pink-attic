import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShippingPolicy from './pages/ShippingPolicy';
import Returns from './pages/Returns';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;