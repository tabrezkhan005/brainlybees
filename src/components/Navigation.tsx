'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Online Programs', href: '/online-programs' },
    { name: 'Offline Programs', href: '/offline-programs' },
    { name: 'Special Needs Education', href: '/special-needs' },
    { name: 'Our Vision', href: '/our-vision' },
    { name: 'Careers', href: '/careers' }
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b-4 border-orange-400 shadow-xl">
      {/* Decorative Top Border */}
      <div className="h-2 bg-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 flex space-x-2">
          <div className="w-1/4 h-full bg-yellow-400"></div>
          <div className="w-1/4 h-full bg-pink-400"></div>
          <div className="w-1/4 h-full bg-blue-400"></div>
          <div className="w-1/4 h-full bg-green-400"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12 border-4 border-white">
                  <span className="text-white font-bold text-2xl font-poppins">B</span>
                </div>
                {/* Cute dots decoration */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 font-poppins group-hover:text-orange-500 transition-colors">
                  BrainlyBees
                  <span className="inline-block ml-1 text-2xl group-hover:animate-bounce">🐝</span>
                </div>
                <div className="text-xs text-orange-600 font-nunito font-semibold tracking-wide">
                  ✨ Smart Learning for Kids ✨
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center px-8">
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                const colorClasses = [
                  { bg: 'bg-orange-400', border: 'border-orange-500', hoverBg: 'hover:bg-orange-400', hoverBorder: 'hover:border-orange-500' },
                  { bg: 'bg-pink-400', border: 'border-pink-500', hoverBg: 'hover:bg-pink-400', hoverBorder: 'hover:border-pink-500' },
                  { bg: 'bg-blue-400', border: 'border-blue-500', hoverBg: 'hover:bg-blue-400', hoverBorder: 'hover:border-blue-500' },
                  { bg: 'bg-purple-400', border: 'border-purple-500', hoverBg: 'hover:bg-purple-400', hoverBorder: 'hover:border-purple-500' },
                  { bg: 'bg-green-400', border: 'border-green-500', hoverBg: 'hover:bg-green-400', hoverBorder: 'hover:border-green-500' },
                  { bg: 'bg-yellow-400', border: 'border-yellow-500', hoverBg: 'hover:bg-yellow-400', hoverBorder: 'hover:border-yellow-500' },
                ];
                const colors = colorClasses[index % colorClasses.length];

                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`text-sm font-bold whitespace-nowrap relative group px-5 py-3 rounded-full font-nunito transition-all duration-300 border-2 ${
                      isActive
                        ? `text-white ${colors.bg} ${colors.border} shadow-lg scale-110 -rotate-2`
                        : `text-gray-700 bg-white border-gray-200 hover:text-white ${colors.hoverBg} ${colors.hoverBorder} hover:shadow-md hover:scale-110 hover:-rotate-2`
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -top-2 -right-2 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3 flex-shrink-0 relative">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/919305454447"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center w-12 h-12 bg-green-400 hover:bg-green-500 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 hover:rotate-12 border-4 border-white"
              title="Chat on WhatsApp"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>

            {/* Book Consultation Button */}
            <button className="relative bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-rotate-3 font-poppins border-4 border-white">
              <span className="flex items-center">
                 Book Consultation
              </span>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs border-2 border-white">
                ✨
              </div>
            </button>

            {/* Peeking Panda */}
            <div className="hidden lg:block absolute -right-35 bottom-0 w-24 h-24 translate-y-1/2">
              <Image
                src="/assets/panda.png"
                alt="Peeking Panda"
                width={96}
                height={96}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition-all duration-300 hover:rotate-90"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-4 pb-6 space-y-3 bg-orange-50 border-t-4 border-orange-400">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              const colorClasses = [
                { bg: 'bg-orange-400', hoverBg: 'hover:bg-orange-400' },
                { bg: 'bg-pink-400', hoverBg: 'hover:bg-pink-400' },
                { bg: 'bg-blue-400', hoverBg: 'hover:bg-blue-400' },
                { bg: 'bg-purple-400', hoverBg: 'hover:bg-purple-400' },
                { bg: 'bg-green-400', hoverBg: 'hover:bg-green-400' },
                { bg: 'bg-yellow-400', hoverBg: 'hover:bg-yellow-400' },
              ];
              const colors = colorClasses[index % colorClasses.length];

              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`block px-6 py-4 text-base font-bold rounded-full font-nunito transition-all duration-300 border-4 border-white shadow-lg ${
                    isActive
                      ? `text-white ${colors.bg} scale-105`
                      : `text-gray-700 bg-white ${colors.hoverBg} hover:text-white hover:scale-105`
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {isActive ? '→ ' : ''}{link.name}
                  {isActive && ' ✨'}
                </Link>
              );
            })}
            <div className="px-2 py-4 space-y-3">
              <a
                href="https://wa.me/919305454447"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-400 hover:bg-green-500 text-white px-6 py-4 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:scale-105 font-poppins border-4 border-white"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Chat on WhatsApp
              </a>
              <button className="w-full bg-pink-400 hover:bg-pink-500 text-white px-6 py-4 rounded-full text-sm font-bold shadow-lg hover:scale-105 font-poppins border-4 border-white">
                📚 Book Consultation ✨
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
