

import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineShoppingCart, HiOutlineHeart, HiOutlineSearch, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-purple-600">PHY</span>
              <span className="text-2xl font-bold text-green-500">TECH</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-purple-600">Service</Link>
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600">About Us</Link>
            <Link to="/how-it-works" className="text-sm font-medium text-gray-700 hover:text-purple-600">How It Works</Link>
            <Link to="/ai-suggestions" className="text-sm font-medium text-gray-700 hover:text-purple-600">AI Suggestions</Link>
            <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-purple-600">Dashboard</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600">Contact</Link>
          </div>

          {/* Actions (Search, Cart, Heart, Login, SignUp) */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center border rounded-full bg-gray-100 px-3 py-1">
              <HiOutlineSearch className="text-gray-500" />
              <input type="text" placeholder="Search" className="bg-transparent border-none outline-none px-2 w-40" />
            </div>

            <Link to="/favorites" className="text-gray-700 hover:text-purple-600">
              <HiOutlineHeart size={24} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-purple-600">
              <HiOutlineShoppingCart size={24} />
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <Link to="/login" className="flex items-center px-3 py-2 text-sm font-medium text-purple-600 hover:text-purple-800">
                <LogIn className="w-4 h-4" /> Login
              </Link>
              <Link to="/register" className="flex items-center px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-purple-700 gap-1 transition">
                <UserPlus className="w-4 h-4" /> Sign Up
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-purple-600">
                {isMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Service</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600" onClick={toggleMenu}>About Us</Link>
            <Link to="/how-it-works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600" onClick={toggleMenu}>How It Works</Link>
            <Link to="/ai-suggestions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600" onClick={toggleMenu}>AI Suggestions</Link>
            <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Dashboard</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Contact</Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-purple-600 hover:text-purple-800" onClick={toggleMenu}>
              <LogIn className="w-4 h-4" /> Login
            </Link>
            <Link to="/register" className="block px-3 py-2 text-base font-medium text-white bg-purple-600 hover:bg-purple-700" onClick={toggleMenu}>
              <UserPlus className="w-4 h-4" /> Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
