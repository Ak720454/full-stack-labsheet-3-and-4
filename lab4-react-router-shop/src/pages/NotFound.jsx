import { Link } from 'react-router-dom';

export default function NotFound({ message = 'The page you are looking for does not exist.' }) {
  return (
    <section className="hero">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>{message}</p>
      <Link to="/" className="btn">Go Home</Link>
    </section>
  );
}
