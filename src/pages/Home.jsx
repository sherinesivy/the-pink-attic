import { Link } from 'react-router-dom';
import products from '../data/product';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

function Home() {
  const featured = products.slice(0, 4);

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to The Pink Attic 🎀</h1>
        <p>Curated vintage clothing, bags and jewelry for the romantically inclined</p>
        <Link to="/shop"><button>Shop Now</button></Link>
      </div>
      <div className="featured-section">
        <h2>Featured Picks</h2>
        <div className="products-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;