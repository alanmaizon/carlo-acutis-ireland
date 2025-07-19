import React, { useState } from 'react';

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
        <div className="hidden md:flex justify-center space-x-12 pb-8 border-t border-stone-200 pt-6">
          <a href="/" className="text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
            HOME
          </a>
          <a href="/about" className="text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
            ABOUT
          </a>
          <a href="/youth" className="text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
            YOUTH
          </a>
          <a href="/resources" className="text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
            RESOURCES/OUTREACH
          </a>
          <a href="/relic" className="text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
            RELIC VISIT
          </a>
          <a href="/schools" className="text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
            SCHOOLS/WORKSHOPS
          </a>
          <a href="/shop" className="text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider transition-colors duration-200">
            SHOP
          </a>
        </div>

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
            <a href="/" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              HOME
            </a>
            <a href="/about" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              ABOUT
            </a>
            <a href="/youth" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              YOUTH
            </a>
            <a href="/resources" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              RESOURCES/OUTREACH
            </a>
            <a href="/relic" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              RELIC VISIT
            </a>
            <a href="/schools" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              SCHOOLS/WORKSHOPS
            </a>
            <a href="/shop" className="block py-3 text-stone-600 hover:text-stone-800 font-light text-sm uppercase tracking-wider">
              SHOP
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;