import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <h1>Welcome to TechShop</h1>
      <p>A React Router + Context API demo with cart, favorites, loading states and a 404 page.</p>
      <Link to="/products" className="btn">Browse Products</Link>
    </section>
  );
}
