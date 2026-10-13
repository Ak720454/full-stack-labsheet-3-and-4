import { Link } from 'react-router-dom';
import { products } from '../data/products.js';
import { useShop } from '../context/ShopContext.jsx';

export default function Cart() {
  const { cart, dispatch } = useShop();

  const lines = cart
    .map((item) => ({ ...item, product: products.find((p) => p.id === item.id) }))
    .filter((l) => l.product);
  const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);

  if (lines.length === 0) {
    return (
      <section>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/products" className="btn">Shop now</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Your Cart</h2>
      <ul className="cart">
        {lines.map(({ id, qty, product }) => (
          <li key={id}>
            <span>{product.emoji} {product.name} x {qty}</span>
            <span>₹{(product.price * qty).toLocaleString('en-IN')}</span>
            <button className="btn danger" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id })}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total.toLocaleString('en-IN')}</h3>
      <button className="btn secondary" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
    </section>
  );
}
