import { useState, useEffect } from 'react';
import { fetchProducts } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import Loader from '../components/Loader.jsx';

export default function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetchProducts().then((data) => {
      if (active) { setItems(data); setLoading(false); }
    });
    return () => { active = false; };   // cleanup if user leaves early
  }, []);

  if (loading) return <Loader text="Loading products..." />;

  return (
    <section>
      <h2>Products</h2>
      <div className="grid">
        {items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
