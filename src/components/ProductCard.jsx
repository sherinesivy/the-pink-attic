import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;