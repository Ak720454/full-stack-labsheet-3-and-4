import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchProductById } from '../data/products.js';
import { useShop } from '../context/ShopContext.jsx';
import Loader from '../components/Loader.jsx';
import NotFound from './NotFound.jsx';

export default function ProductDetails() {
  const { id } = useParams();            // read route param
  const navigate = useNavigate();
  const { favorites, dispatch } = useShop();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchProductById(id).then((data) => {
      if (active) { setProduct(data); setLoading(false); }
    });
    return () => { active = false; };
  }, [id]);

  if (loading) return <Loader text="Loading product..." />;
  if (!product) return <NotFound message={`No product with id "${id}" exists.`} />;

  const isFav = favorites.includes(product.id);

  return (
    <section className="details">
      <button className="btn secondary" onClick={() => navigate(-1)}>← Back</button>
      <div className="emoji big">{product.emoji}</div>
      <h2>{product.name}</h2>
      <p className="tag">{product.category}</p>
      <p>{product.description}</p>
      <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
      <div className="actions">
        <button className="btn" onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id })}>
          Add to Cart
        </button>
        <button className="btn secondary" onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', id: product.id })}>
          {isFav ? '❤️ Favorited' : '🤍 Add to Favorites'}
        </button>
        <Link to="/cart" className="btn secondary">Go to Cart</Link>
      </div>
    </section>
  );
}
