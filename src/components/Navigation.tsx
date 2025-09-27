'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Online Programs', href: '#' },
    { name: 'Offline Programs', href: '#' },
    { name: 'Online School', href: '#' },
    { name: 'Special Needs Education', href: '#' },
    { name: 'Our Vision', href: '#' },
    { name: 'Careers', href: '#' }
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-900">BrainlyBees</div>
                <div className="text-xs text-gray-500 -mt-0.5">Smart Learning</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center px-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    link.active 
                      ? 'text-red-500' 
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Book Free Trial Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 whitespace-nowrap">
              Book Free Trial
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  link.active 
                    ? 'text-red-500 bg-red-50' 
                    : 'text-gray-700 hover:text-red-500 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200">
                Book Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}