'use client';

import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4">
      {/* WhatsApp Button */}
      <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <a
          href="https://wa.me/919305454447"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
        >
          <div className="flex items-center px-4 py-3">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            <span className="font-semibold hidden group-hover:block transition-all duration-300">
              Chat Now
            </span>
          </div>
        </a>
      </div>

      {/* Scroll to Top Button */}
      <div className={`transform transition-all duration-500 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}