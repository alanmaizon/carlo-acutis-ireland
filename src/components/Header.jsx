import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-stone-100 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section - Desktop Only */}
        <div className="hidden md:block text-center py-8">
          <h1 className="text-2xl font-light text-stone-700 tracking-wide">
            CARLO ACUTIS IRELAND
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-12 pb-8 border-t border-stone-200 pt-6">
          <li className="nav-item">
            <Link to="/" className="nav-link text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/youth" className="nav-link text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
              YOUTH
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
              RESOURCES/OUTREACH
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/relic" className="nav-link text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
              RELIC VISIT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/schools" className="nav-link text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
              SCHOOLS/WORKSHOPS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
              SHOP
            </Link>
          </li>
        </ul>

        {/* Mobile Header with Title and Menu Button */}
        <div className="md:hidden flex justify-between items-center py-4">
          <h1 className="text-lg font-light text-stone-700 tracking-wide">
            CARLO ACUTIS IRELAND
          </h1>
          <button 
            className="p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-0.5 bg-stone-600 mb-1.5 transition-all duration-200"></div>
            <div className="w-6 h-0.5 bg-stone-600 mb-1.5 transition-all duration-200"></div>
            <div className="w-6 h-0.5 bg-stone-600 transition-all duration-200"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-stone-200 pt-6">
            <Link to="/" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              HOME
            </Link>
            <Link to="/about" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              ABOUT
            </Link>
            <Link to="/youth" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              YOUTH
            </Link>
            <Link to="/resources" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              RESOURCES/OUTREACH
            </Link>
            <Link to="/relic" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              RELIC VISIT
            </Link>
            <Link to="/schools" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              SCHOOLS/WORKSHOPS
            </Link>
            <Link to="/shop" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              SHOP
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;