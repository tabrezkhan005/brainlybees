'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', color: 'gradient' },
    { href: '/online-programs', label: 'Online Programs', color: 'gradient' },
    { href: '/offline-programs', label: 'Offline Programs', color: 'gradient' },
    { href: '/special-needs', label: 'Special Needs Education', color: 'gradient' },
    { href: '/our-vision', label: 'Our Vision', color: 'gradient' },
    { href: '/careers', label: 'Careers', color: 'gradient' },
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colorMap = {
      pink: {
        text: isActive ? 'text-white' : 'text-gray-600 hover:text-white',
        bg: isActive ? 'bg-pink-500' : 'hover:bg-pink-500 bg-white border border-gray-200',
        border: 'border-transparent',
        underline: isActive ? 'after:content-[""] after:absolute after:bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-white after:rounded-full' : '',
        mobileBg: isActive ? 'bg-pink-500 text-white' : 'hover:bg-pink-50'
      },
      gradient: {
        text: isActive ? 'text-white' : 'text-gray-600 hover:text-white',
        bg: isActive ? 'bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500' : 'hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-400 hover:to-purple-500',
        border: 'border-transparent',
        underline: isActive ? 'after:content-[""] after:absolute after:bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-white after:rounded-full' : '',
        mobileBg: isActive ? 'bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 text-white' : 'hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-400 hover:to-purple-500'
      },
      gray: {
        text: isActive ? 'text-white' : 'text-gray-600 hover:text-gray-800',
        bg: isActive ? 'bg-gray-600' : 'hover:bg-gray-100 bg-white',
        border: 'border-transparent',
        underline: '',
        mobileBg: isActive ? 'bg-gray-600 text-white' : 'hover:bg-gray-50'
      },
      orange: {
        text: isActive ? 'text-white' : 'text-gray-600 hover:text-white',
        bg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500' : 'hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 bg-white border border-gray-200',
        border: 'border-transparent',
        underline: '',
        mobileBg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white' : 'hover:bg-orange-50'
      },
      blue: {
        text: isActive ? 'text-white' : 'text-gray-600 hover:text-white',
        bg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500' : 'hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 bg-white border border-gray-200',
        border: 'border-transparent',
        underline: '',
        mobileBg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white' : 'hover:bg-blue-50'
      },
      amber: {
        text: isActive ? 'text-white' : 'text-gray-600 hover:text-white',
        bg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500' : 'hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 bg-white border border-gray-200',
        border: 'border-transparent',
        underline: '',
        mobileBg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white' : 'hover:bg-amber-50'
      },
      purple: {
        text: isActive ? 'text-white' : 'text-gray-600 hover:text-white',
        bg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500' : 'hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 bg-white border border-gray-200',
        border: 'border-transparent',
        underline: '',
        mobileBg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white' : 'hover:bg-purple-50'
      },
      green: {
        text: isActive ? 'text-white' : 'text-gray-600 hover:text-white',
        bg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500' : 'hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 bg-white border border-gray-200',
        border: 'border-transparent',
        underline: '',
        mobileBg: isActive ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white' : 'hover:bg-green-50'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2C8 2 3 5 3 11C3 14 3 17 3 22C3 27 3 30 3 33C3 39 8 42 13 42C16 42 19 42 22 42C25 42 28 42 31 42C37 42 41 39 41 33C41 30 41 27 41 22C41 17 41 14 41 11C41 5 37 2 31 2C28 2 25 2 22 2C19 2 16 2 13 2Z" 
                        fill="url(#exactGradient)" 
                        transform="rotate(-8 22 22)"
                        style={{filter: 'drop-shadow(0 2px 6px rgba(255, 69, 0, 0.2))'}}
                  />
                  <rect x="9" y="9" width="26" height="26" rx="7" ry="7" 
                        fill="white" 
                        fillOpacity="0.92"
                        transform="rotate(-8 22 22)"
                  />
                  <defs>
                    <linearGradient id="exactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff4500" />
                      <stop offset="45%" stopColor="#ff6b35" />
                      <stop offset="75%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 font-poppins">
                  BrainlyBees
                </div>
                <div className="text-xs sm:text-xs lg:text-xs text-orange-500 font-nunito">
                  Smart Learning for Kids
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center flex-1 justify-center px-4">
            <div className="flex items-center space-x-1 2xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const colors = getColorClasses(link.color, isActive);
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 2xl:px-5 py-2.5 rounded-full text-xs 2xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${colors.text} ${colors.bg} ${colors.underline} shadow-sm hover:shadow-md`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Action Buttons - Hidden on mobile and tablet, shown on desktop */}
          <div className="hidden lg:flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918979245215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-200 whitespace-nowrap shadow-sm"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.736"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Book Consultation Button */}
            <Link href="/consultation">
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
                <span className="hidden sm:inline">Book Consultation</span>
                <span className="sm:hidden">Book</span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden ml-2">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-2 sm:space-y-3 max-w-7xl mx-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const colors = getColorClasses(link.color, isActive);
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-full text-sm sm:text-base font-semibold transition-all duration-200 ${colors.text} ${colors.bg} ${colors.underline} shadow-sm`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3 border-t border-gray-200">
              <a
                href="https://wa.me/918979245215"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg sm:rounded-full font-semibold shadow-sm transition-all duration-200"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.736"/>
                </svg>
                <span className="text-sm sm:text-base">Contact via WhatsApp</span>
              </a>
              <Link href="/consultation">
                <button 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white rounded-lg sm:rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
