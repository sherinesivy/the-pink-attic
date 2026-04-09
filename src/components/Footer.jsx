
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h2>The Pink Attic 🎀</h2>
          <p>Curated vintage finds for the romantically inclined.</p>
        </div>
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop?category=all">All</Link></li>
                        <li><Link to="/shop?category=clothing">Clothing</Link></li>
                        <li><Link to="/shop?category=bags">Bags</Link></li>
                        <li><Link to="/shop?category=jewelry">Jewelry</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Info</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
<li><Link to="/shipping">Shipping Policy</Link></li>
<li><Link to="/returns">Returns</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 The Pink Attic.</p>
      </div>
    </footer>
  );
}

export default Footer;