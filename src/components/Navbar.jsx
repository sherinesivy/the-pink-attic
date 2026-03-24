import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav>
      <h1><Link to="/">The Pink Attic 🎀</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="/shop">Shop</Link>
          <ul className="dropdown-menu">
            <li><Link to="/shop?category=all">All</Link></li>
            <li><Link to="/shop?category=clothing">Clothing</Link></li>
            <li><Link to="/shop?category=bags">Bags</Link></li>
            <li><Link to="/shop?category=jewelry">Jewelry</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart 🛒 {cartCount > 0 && <span>{cartCount}</span>}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;