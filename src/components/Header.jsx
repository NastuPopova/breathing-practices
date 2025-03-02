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
    name: 'Пройти тест',
    href: '#quick-test',
    isHighlighted: true
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
      isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo and Instructor Info */}
          <div className="flex items-start flex-col">
            <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Анастасия Попова
            </h1>
            <span className={`text-lg transition-colors duration-300 ${
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
                className={`text-lg font-medium transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white hover:text-white/80 hover:bg-white/10'
                } ${
                  item.name === 'Купить курс' 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl'
                    : item.isHighlighted
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl'
                    : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800 h-8 w-8' : 'text-white h-8 w-8'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800 h-8 w-8' : 'text-white h-8 w-8'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="py-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full px-6 py-3 text-left text-lg font-medium rounded-lg transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white hover:text-white/80 hover:bg-white/10'
                } ${
                  item.name === 'Купить курс' 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                    : item.isHighlighted
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                    : ''
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