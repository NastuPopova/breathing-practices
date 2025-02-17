import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navigation = [
  {
    name: 'О дыхании',
    href: '#about-breathing'
  },
  {
    name: 'Обо мне',
    href: '#about-me'
  },
  {
    name: 'Отзывы',
    href: '#reviews'
  },
  {
    name: 'FAQ',
    href: '#faq'
  },
  {
    name: 'Купить курс',
    href: '#products'
  }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo and Instructor Info */}
          <div className="flex items-start flex-col">
            <h1 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Анастасия Попова
            </h1>
            <span className={`text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-white/90'
            }`}>
              Инструктор по дыхательным практикам
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="py-4 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white hover:text-white/80 hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 