import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/product';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found 🌸</p>;

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-price">₹{product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-rating">⭐ {product.rating} / 5</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;