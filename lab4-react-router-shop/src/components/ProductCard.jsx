import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext.jsx';

export default function ProductCard({ product }) {
  const { favorites, dispatch } = useShop();
  const isFav = favorites.includes(product.id);

  return (
    <article className="card">
      <button
        className="heart"
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', id: product.id })}
      >
        {isFav ? '❤️' : '🤍'}
      </button>
      <div className="emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
      <div className="actions">
        <Link to={`/products/${product.id}`} className="btn secondary">Details</Link>
        <button className="btn" onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id })}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
