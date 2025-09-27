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
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Animated Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-lg group-hover:animate-pulse">B</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">BrainlyBees</div>
                <div className="text-xs text-gray-500 -mt-0.5">Smart Learning</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation with Hover Effects */}
          <div className="hidden lg:flex items-center flex-1 justify-center px-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 whitespace-nowrap relative group ${
                    link.active 
                      ? 'text-red-500' 
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full ${
                    link.active ? 'w-full' : ''
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* WhatsApp Icon */}
            <a 
              href="https://wa.me/your-whatsapp-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-200"
              title="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>

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
            <div className="px-3 py-2 space-y-3">
              <a 
                href="https://wa.me/your-whatsapp-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Chat on WhatsApp
              </a>
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