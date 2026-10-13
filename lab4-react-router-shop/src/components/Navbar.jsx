import { NavLink } from 'react-router-dom';
import { useShop } from '../context/ShopContext.jsx';

export default function Navbar() {
  const { cartCount, favorites } = useShop();
  const link = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav className="navbar">
      <span className="brand">🛒 TechShop</span>
      <div className="links">
        <NavLink to="/" end className={link}>Home</NavLink>
        <NavLink to="/products" className={link}>Products</NavLink>
        <NavLink to="/cart" className={link}>Cart ({cartCount})</NavLink>
        <span className="fav">❤ {favorites.length}</span>
      </div>
    </nav>
  );
}
