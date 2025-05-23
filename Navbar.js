import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link to="/">
        <img src={logo} alt="Morcom Design Logo" className="h-8" />
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-black text-gray-500 transition">Home</Link>
        <Link to="/about" className="hover:text-black text-gray-500 transition">About</Link>
        <Link to="/portfolio" className="hover:text-black text-gray-500 transition">Portfolio</Link>
        <Link to="/pricing" className="hover:text-black text-gray-500 transition">Pricing</Link>
        <Link to="/contact" className="hover:text-black text-gray-500 transition">Contact</Link>
      </div>
    </nav>
  );
}