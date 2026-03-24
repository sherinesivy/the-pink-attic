import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/product';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

function Shop() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat) setActiveCategory(cat);
  }, [location.search]);

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="products-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;